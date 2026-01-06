from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from django.http import JsonResponse

def home(request):
    return JsonResponse({"message": "Django backend is running"})

urlpatterns = [
    path('', home),   # 👈 ADD THIS
    path('admin/', admin.site.urls),
    path('api/', include('store.urls')),
]
