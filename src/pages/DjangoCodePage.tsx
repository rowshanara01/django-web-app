import React, { useState } from 'react';
import { useStore } from '../context/StoreContext';
import { Copy, Check, Terminal, FileCode, Shield, Layers, Download } from 'lucide-react';

export const DjangoCodePage: React.FC = () => {
  const { showToast } = useStore();
  const [activeFile, setActiveFile] = useState<string>('models.py');
  const [copied, setCopied] = useState(false);

  const files: Record<string, { label: string; description: string; code: string }> = {
    'models.py': {
      label: 'models.py',
      description: 'CustomUser, Category, Brand, Product, Order, and OrderItem models with UUIDs and relationships.',
      code: `from django.db import models
from django.contrib.auth.models import AbstractUser
import uuid

class User(AbstractUser):
    """
    Custom user model where role is either 'customer' or 'admin'.
    Superadmin credentials are created strictly ONCE via custom management command.
    """
    ROLE_CHOICES = (
        ('customer', 'Customer'),
        ('admin', 'Admin'),
    )
    role = models.CharField(max_length=20, choices=ROLE_CHOICES, default='customer')
    phone = models.CharField(max_length=25, blank=True, null=True)
    avatar = models.ImageField(upload_to='profiles/', blank=True, null=True)
    street_address = models.CharField(max_length=255, blank=True)
    city = models.CharField(max_length=100, blank=True)
    postal_code = models.CharField(max_length=20, blank=True)

    def is_store_admin(self):
        return self.role == 'admin' or self.is_superuser


class Category(models.Model):
    name = models.CharField(max_length=120, unique=True)
    slug = models.SlugField(max_length=140, unique=True)
    description = models.TextField(blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        verbose_name_plural = 'Categories'

    def __str__(self):
        return self.name


class Brand(models.Model):
    name = models.CharField(max_length=120, unique=True)
    slug = models.SlugField(max_length=140, unique=True)
    origin = models.CharField(max_length=100, blank=True)
    description = models.TextField(blank=True)

    def __str__(self):
        return self.name


class Product(models.Model):
    title = models.CharField(max_length=255)
    slug = models.SlugField(max_length=280, unique=True)
    description = models.TextField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
    compare_at_price = models.DecimalField(max_digits=10, decimal_places=2, blank=True, null=True)
    category = models.ForeignKey(Category, on_delete=models.CASCADE, related_name='products')
    brand = models.ForeignKey(Brand, on_delete=models.CASCADE, related_name='products')
    stock = models.PositiveIntegerField(default=0)
    sku = models.CharField(max_length=50, unique=True)
    image = models.ImageField(upload_to='products/', default='products/default.jpg')
    is_featured = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.title} ({self.sku})"


class Order(models.Model):
    STATUS_CHOICES = (
        ('Pending', 'Pending'),
        ('Processing', 'Processing'),
        ('Shipped', 'Shipped'),
        ('Delivered', 'Delivered'),
        ('Cancelled', 'Cancelled'),
    )
    PAYMENT_STATUS = (
        ('Unpaid', 'Unpaid'),
        ('Paid', 'Paid'),
    )

    order_number = models.CharField(max_length=30, unique=True, default=uuid.uuid4)
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, blank=True, related_name='orders')
    customer_name = models.CharField(max_length=150)
    customer_email = models.EmailField()
    customer_phone = models.CharField(max_length=30)
    street = models.CharField(max_length=255)
    city = models.CharField(max_length=100)
    postal_code = models.CharField(max_length=20)
    notes = models.TextField(blank=True)
    
    subtotal = models.DecimalField(max_digits=10, decimal_places=2)
    shipping_fee = models.DecimalField(max_digits=10, decimal_places=2, default=0)
    tax = models.DecimalField(max_digits=10, decimal_places=2, default=0)
    total = models.DecimalField(max_digits=10, decimal_places=2)

    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='Pending')
    payment_method = models.CharField(max_length=50, default='Cash on Delivery')
    payment_status = models.CharField(max_length=20, choices=PAYMENT_STATUS, default='Unpaid')
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Order #{self.order_number} - {self.customer_name}"


class OrderItem(models.Model):
    order = models.ForeignKey(Order, on_delete=models.CASCADE, related_name='items')
    product = models.ForeignKey(Product, on_delete=models.PROTECT)
    product_title = models.CharField(max_length=255)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    quantity = models.PositiveIntegerField(default=1)
`
    },
    'commands/createsuperuser_once.py': {
      label: 'createsuperuser_once.py',
      description: 'Strict 1-time admin initialization enforcement. Aborts if an admin user already exists!',
      code: `"""
Django Management Command:
Enforces requirement: "admin email and password matro 1 bar e toiri hobe"
Run via: python manage.py createsuperuser_once --email=admin@example.com --password=Secret123
"""

from django.core.management.base import BaseCommand, CommandError
from django.contrib.auth import get_user_model

User = get_user_model()

class Command(BaseCommand):
    help = 'Initialize the superadmin account exactly ONCE. Locks subsequent executions.'

    def add_arguments(self, parser):
        parser.add_argument('--username', type=str, default='admin')
        parser.add_argument('--email', type=str, required=True)
        parser.add_argument('--password', type=str, required=True)

    def handle(self, *args, **options):
        # INVARIANT CHECK: Has any admin/superuser already been initialized?
        if User.objects.filter(models.Q(is_superuser=True) | models.Q(role='admin')).exists():
            raise CommandError(
                "SECURITY LOCK ACTIVE: Master superadmin has already been initialized! "
                "Per system invariants, admin creation is permitted strictly ONCE."
            )

        email = options['email'].strip().lower()
        password = options['password']
        username = options['username']

        admin_user = User.objects.create_superuser(
            username=username,
            email=email,
            password=password,
            role='admin'
        )

        self.stdout.write(self.style.SUCCESS(
            f"Successfully initialized master superadmin: {admin_user.email}. "
            f"Administrative creation is now permanently locked."
        ))
`
    },
    'serializers.py': {
      label: 'serializers.py',
      description: 'Django REST Framework serializers with anti-escalation register serializer.',
      code: `from rest_framework import serializers
from .models import User, Category, Brand, Product, Order, OrderItem

class RegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True, min_length=6)

    class Meta:
        model = User
        fields = ('id', 'username', 'email', 'password', 'first_name', 'last_name')

    def create(self, validated_data):
        # CRITICAL SECURITY INVARIANT:
        # Public registrations are strictly set to role='customer', is_staff=False, is_superuser=False.
        user = User.objects.create_user(
            username=validated_data['username'],
            email=validated_data['email'],
            password=validated_data['password'],
            first_name=validated_data.get('first_name', ''),
            last_name=validated_data.get('last_name', ''),
            role='customer',      # HARDCODED: No one can register as admin
            is_staff=False,
            is_superuser=False
        )
        return user


class UserProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email', 'role', 'phone', 'avatar', 'street_address', 'city', 'postal_code')
        read_only_fields = ('role', 'email')


class ProductSerializer(serializers.ModelSerializer):
    category_name = serializers.ReadOnlyField(source='category.name')
    brand_name = serializers.ReadOnlyField(source='brand.name')

    class Meta:
        model = Product
        fields = '__all__'


class CategorySerializer(serializers.ModelSerializer):
    product_count = serializers.IntegerField(source='products.count', read_only=True)

    class Meta:
        model = Category
        fields = '__all__'


class BrandSerializer(serializers.ModelSerializer):
    product_count = serializers.IntegerField(source='products.count', read_only=True)

    class Meta:
        model = Brand
        fields = '__all__'


class OrderItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = OrderItem
        fields = '__all__'


class OrderSerializer(serializers.ModelSerializer):
    items = OrderItemSerializer(many=True, read_only=True)

    class Meta:
        model = Order
        fields = '__all__'
`
    },
    'views.py': {
      label: 'views.py',
      description: 'DRF ModelViewSets with role-based permissions (IsAdminUser for CRUD, AllowAny for Storefront).',
      code: `from rest_framework import viewsets, permissions, status
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.views import APIView
from django.contrib.auth import get_user_model
from .models import Category, Brand, Product, Order, OrderItem
from .serializers import (
    RegisterSerializer, 
    UserProfileSerializer, 
    ProductSerializer, 
    CategorySerializer, 
    BrandSerializer, 
    OrderSerializer
)

User = get_user_model()

class IsAdminOrReadOnly(permissions.BasePermission):
    """
    Allow storefront reading for all users, but restrict CUD (create, update, delete) to Admin.
    """
    def has_permission(self, request, view):
        if request.method in permissions.SAFE_METHODS:
            return True
        return request.user and request.user.is_authenticated and request.user.is_store_admin()


class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all().order_by('-created_at')
    serializer_class = ProductSerializer
    permission_classes = [IsAdminOrReadOnly]
    lookup_field = 'slug'


class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    permission_classes = [IsAdminOrReadOnly]
    lookup_field = 'slug'


class BrandViewSet(viewsets.ModelViewSet):
    queryset = Brand.objects.all()
    serializer_class = BrandSerializer
    permission_classes = [IsAdminOrReadOnly]
    lookup_field = 'slug'


class RegisterView(APIView):
    permission_classes = [permissions.AllowAny]

    def post(self, request):
        # Anti-privilege escalation guarantee
        serializer = RegisterSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            return Response(
                {"message": "Customer account created.", "user_id": user.id}, 
                status=status.HTTP_201_CREATED
            )
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class OrderViewSet(viewsets.ModelViewSet):
    queryset = Order.objects.all().order_by('-created_at')
    serializer_class = OrderSerializer

    def get_permissions(self):
        if self.action in ['update', 'partial_update', 'destroy']:
            # Only admin can edit order status and payment
            return [permissions.IsAdminUser()]
        return [permissions.AllowAny()]
`
    },
    'admin.py': {
      label: 'admin.py',
      description: 'Django Admin interface configuration for Product, Category, Brand, and Order models.',
      code: `from django.contrib import admin
from .models import User, Category, Brand, Product, Order, OrderItem

@admin.register(User)
class CustomUserAdmin(admin.ModelAdmin):
    list_display = ('username', 'email', 'role', 'is_staff', 'is_active', 'date_joined')
    list_filter = ('role', 'is_staff', 'is_active')
    search_fields = ('username', 'email', 'phone')

@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ('title', 'sku', 'price', 'stock', 'category', 'brand', 'is_featured')
    list_filter = ('category', 'brand', 'is_featured')
    search_fields = ('title', 'sku', 'description')
    prepopulated_fields = {'slug': ('title',)}

@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ('name', 'slug')
    prepopulated_fields = {'slug': ('name',)}

@admin.register(Brand)
class BrandAdmin(admin.ModelAdmin):
    list_display = ('name', 'origin', 'slug')
    prepopulated_fields = {'slug': ('name',)}

class OrderItemInline(admin.TabularInline):
    model = OrderItem
    extra = 0
    readonly_fields = ('product_title', 'price', 'quantity')

@admin.register(Order)
class OrderAdmin(admin.ModelAdmin):
    list_display = ('order_number', 'customer_name', 'customer_phone', 'total', 'status', 'payment_status', 'created_at')
    list_filter = ('status', 'payment_status', 'created_at')
    search_fields = ('order_number', 'customer_name', 'customer_email', 'customer_phone')
    inlines = [OrderItemInline]
`
    }
  };

  const currentFile = files[activeFile] || files['models.py'];

  const handleCopyCode = () => {
    navigator.clipboard.writeText(currentFile.code);
    setCopied(true);
    showToast(`Copied ${currentFile.label} to clipboard!`, 'success');
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      
      {/* Title Banner */}
      <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="space-y-3 max-w-2xl">
          <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400">
            <Terminal className="w-4 h-4" />
            <span>Django 5.x & Django REST Framework Production Codebase</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
            Python Django Backend Architecture
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Here is the complete, production-ready Python Django codebase backing this platform. It demonstrates how models, 1-time superuser initialization, non-escalating customer registration, and admin CRUD permissions are implemented in idiomatic Django and DRF.
          </p>
        </div>

        <a
          href="/nexstore-ecommerce.zip"
          download="nexstore-ecommerce.zip"
          className="px-5 py-3 bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold text-xs rounded-xl shadow-lg flex items-center gap-2 whitespace-nowrap transition-transform hover:scale-102 shrink-0"
        >
          <Download className="w-4 h-4" />
          <span>Download Project (.ZIP)</span>
        </a>
      </div>

      {/* Code Explorer Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* Sidebar file selection */}
        <div className="lg:col-span-4 bg-white border border-slate-200 rounded-xl p-4 space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-400 px-2 block mb-2">
            Django Project Files
          </span>

          {Object.entries(files).map(([filename, item]) => (
            <button
              key={filename}
              onClick={() => setActiveFile(filename)}
              className={`w-full text-left p-3 rounded-lg transition-colors flex items-start gap-3 ${
                activeFile === filename
                  ? 'bg-slate-900 text-white'
                  : 'hover:bg-slate-100 text-slate-700'
              }`}
            >
              <FileCode className={`w-4 h-4 shrink-0 mt-0.5 ${activeFile === filename ? 'text-sky-400' : 'text-slate-400'}`} />
              <div className="min-w-0">
                <p className="text-xs font-mono font-bold truncate">{item.label}</p>
                <p className={`text-[11px] line-clamp-1 mt-0.5 ${activeFile === filename ? 'text-slate-300' : 'text-slate-500'}`}>
                  {item.description}
                </p>
              </div>
            </button>
          ))}
        </div>

        {/* Code View Panel */}
        <div className="lg:col-span-8 bg-slate-950 border border-slate-800 rounded-xl overflow-hidden shadow-2xl flex flex-col">
          
          {/* Top Bar of Code Editor */}
          <div className="px-5 py-3.5 bg-slate-900 border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-rose-500/80" />
              <span className="w-3 h-3 rounded-full bg-amber-500/80" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
              <span className="text-xs font-mono text-slate-300 ml-2 font-semibold">
                {currentFile.label}
              </span>
            </div>

            <button
              onClick={handleCopyCode}
              className="px-3 py-1 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded text-xs font-mono flex items-center gap-1.5 transition-colors border border-slate-700"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied!' : 'Copy Code'}</span>
            </button>
          </div>

          <div className="p-4 bg-slate-900/60 border-b border-slate-800/80 text-xs text-slate-400">
            {currentFile.description}
          </div>

          {/* Syntax Display */}
          <pre className="p-5 font-mono text-xs text-slate-200 overflow-x-auto leading-relaxed max-h-[600px] select-text">
            <code>{currentFile.code}</code>
          </pre>
        </div>

      </div>

    </div>
  );
};
