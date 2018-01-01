from django.conf.urls import include, url, handler404, handler500
from django.contrib import admin
from blog import views

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'', include('blog.urls'))
]

handler404 = views.error_page

handler500 = views.error_page
