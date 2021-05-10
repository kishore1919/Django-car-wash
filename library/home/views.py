from django.shortcuts import render
from home.models import Booking


# Create your views here.
def index(request):
    if(request.method == 'POST'):
        name = request.POST.get('name')
        number = request.POST.get('number')
        address = request.POST.get('address')
        description = request.POST.get('description')
        booking = Booking(name = name,number = number,address = address,description = description)
        booking.save()
    return render(request,"home/index.html")
    