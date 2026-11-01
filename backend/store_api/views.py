from rest_framework import viewsets, permissions, status
from rest_framework.views import APIView
from rest_framework.response import Response
from django.contrib.auth import authenticate, login, logout
from django.db.models import Sum, Count

from .models import User, Category, Brand, Product, Order
from .serializers import (
    UserSerializer, RegisterSerializer, CategorySerializer,
    BrandSerializer, ProductSerializer, OrderSerializer
)

class IsAdminOrReadOnly(permissions.BasePermission):
    """Allow full access to admin users, read-only to others."""
    def has_permission(self, request, view):
        if request.method in permissions.SAFE_METHODS:
            return True
        return bool(request.user and request.user.is_authenticated and (request.user.role == 'admin' or request.user.is_staff))


class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    permission_classes = [IsAdminOrReadOnly]
    lookup_field = 'id'

    def get_queryset(self):
        qs = super().get_queryset()
        category_id = self.request.query_params.get('category')
        brand_id = self.request.query_params.get('brand')
        search = self.request.query_params.get('search')
        featured = self.request.query_params.get('featured')

        if category_id:
            qs = qs.filter(category_id=category_id)
        if brand_id:
            qs = qs.filter(brand_id=brand_id)
        if featured:
            qs = qs.filter(featured=True)
        if search:
            qs = qs.filter(name__icontains=search)
        return qs


class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    permission_classes = [IsAdminOrReadOnly]


class BrandViewSet(viewsets.ModelViewSet):
    queryset = Brand.objects.all()
    serializer_class = BrandSerializer
    permission_classes = [IsAdminOrReadOnly]


class OrderViewSet(viewsets.ModelViewSet):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer

    def get_permissions(self):
        if self.action in ['create']:
            return [permissions.AllowAny()]
        return [permissions.IsAuthenticated()]

    def get_queryset(self):
        user = self.request.user
        if not user.is_authenticated:
            return Order.objects.none()
        if user.role == 'admin' or user.is_staff:
            return Order.objects.all()
        return Order.objects.filter(user=user)


class RegisterView(APIView):
    permission_classes = [permissions.AllowAny]

    def post(self, request):
        serializer = RegisterSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            return Response(
                {"message": "Registration successful", "user": UserSerializer(user).data},
                status=status.HTTP_201_CREATED
            )
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class LoginView(APIView):
    permission_classes = [permissions.AllowAny]

    def post(self, request):
        email = request.data.get('email', '').strip().lower()
        password = request.data.get('password', '')

        user = authenticate(request, username=email, password=password)
        if user is not None:
            login(request, user)
            return Response({
                "message": "Login successful",
                "user": UserSerializer(user).data
            })
        return Response(
            {"detail": "Invalid email or password credentials."},
            status=status.HTTP_401_UNAUTHORIZED
        )


class ProfileView(APIView):
    permission_classes = [permissions.IsAuthenticated]

    def get(self, request):
        return Response(UserSerializer(request.user).data)

    def put(self, request):
        serializer = UserSerializer(request.user, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class AdminStatsView(APIView):
    permission_classes = [permissions.IsAdminUser]

    def get(self, request):
        total_revenue = Order.objects.filter(status='delivered').aggregate(Sum('total_amount'))['total_amount__sum'] or 0
        total_orders = Order.objects.count()
        total_products = Product.objects.count()
        total_customers = User.objects.filter(role='customer').count()

        return Response({
            "total_revenue": float(total_revenue),
            "total_orders": total_orders,
            "total_products": total_products,
            "total_customers": total_customers
        })
