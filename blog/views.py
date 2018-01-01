from django.shortcuts import render
from .models import Post
from django.utils import timezone

def base(request):
    posts = Post.objects.filter(published_date__lte=timezone.now()).order_by('published_date')
    return render(request, 'index.html', {'posts': posts})

def error_page(request):
    return render(request, 'index.html', {})
