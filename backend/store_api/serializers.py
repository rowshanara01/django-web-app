from rest_framework import serializers
from .models import User, Category, Brand, Product, Order, OrderItem

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'email', 'first_name', 'last_name', 'role', 'phone', 'address', 'city', 'avatar', 'date_joined']
        read_only_fields = ['id', 'role', 'date_joined']


class RegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True, min_length=6)

    class Meta:
        model = User
        fields = ['email', 'password', 'first_name', 'last_name', 'phone', 'address', 'city']

    def create(self, validated_data):
        password = validated_data.pop('password')
        # Security invariant: Public registration is always customer role, non-staff, non-superuser
        user = User.objects.create_user(
            email=validated_data['email'],
            password=password,
            first_name=validated_data.get('first_name', ''),
            last_name=validated_data.get('last_name', ''),
            phone=validated_data.get('phone', ''),
            address=validated_data.get('address', ''),
            city=validated_data.get('city', ''),
            role='customer',
            is_staff=False,
            is_superuser=False
        )
        return user


class CategorySerializer(serializers.ModelSerializer):
    product_count = serializers.IntegerField(source='products.count', read_only=True)

    class Meta:
        model = Category
        fields = ['id', 'name', 'slug', 'description', 'icon', 'image', 'product_count', 'created_at']


class BrandSerializer(serializers.ModelSerializer):
    product_count = serializers.IntegerField(source='products.count', read_only=True)

    class Meta:
        model = Brand
        fields = ['id', 'name', 'slug', 'origin', 'description', 'logo', 'product_count', 'created_at']


class ProductSerializer(serializers.ModelSerializer):
    category_name = serializers.ReadOnlyField(source='category.name')
    brand_name = serializers.ReadOnlyField(source='brand.name')

    class Meta:
        model = Product
        fields = [
            'id', 'name', 'slug', 'category', 'category_name', 
            'brand', 'brand_name', 'price', 'compare_price', 
            'stock', 'sku', 'rating', 'review_count', 'featured', 
            'description', 'specs', 'image', 'created_at', 'updated_at'
        ]


class OrderItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = OrderItem
        fields = ['id', 'product', 'product_name', 'price', 'quantity', 'subtotal']


class OrderSerializer(serializers.ModelSerializer):
    items = OrderItemSerializer(many=True, required=False)

    class Meta:
        model = Order
        fields = [
            'id', 'order_number', 'user', 'customer_name', 'customer_email',
            'customer_phone', 'shipping_address', 'shipping_city',
            'subtotal', 'shipping_fee', 'total_amount',
            'status', 'payment_method', 'payment_status', 'created_at', 'items'
        ]
        read_only_fields = ['id', 'created_at']

    def create(self, validated_data):
        items_data = self.context.get('request').data.get('items', [])
        order = Order.objects.create(**validated_data)
        
        for item_data in items_data:
            OrderItem.objects.create(
                order=order,
                product_id=item_data.get('product_id'),
                product_name=item_data.get('product_name', 'Product'),
                price=item_data.get('price', 0),
                quantity=item_data.get('quantity', 1),
                subtotal=item_data.get('subtotal', 0)
            )
        return order
