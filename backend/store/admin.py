from django.contrib import admin
from .models import (
    Category,
    Product,
    Cart,
    CartItem,
    UserProfile,
    Order,
    OrderItem
)

admin.site.register(Category)
admin.site.register(Product)
admin.site.register(Cart)
admin.site.register(CartItem)
admin.site.register(UserProfile)
admin.site.register(Order)
admin.site.register(OrderItem)
