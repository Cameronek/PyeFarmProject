from django.shortcuts import render
from rest_framework import generics, status
from .models import Member
from .serializers import MemberSerializer, CreateMemberSerializer
from rest_framework.views import APIView
from rest_framework.response import Response

from django.http import JsonResponse

class MemberView(generics.ListAPIView):
    queryset = Member.objects.all()
    serializer_class = MemberSerializer

class CreateMemberView(APIView):
    serializer_class = CreateMemberSerializer

def getNameByID(request, id):
    try:
        response = Member.objects.get(id=id)
        jsonResponse = {"First Name": response.firstname, "Last Name": response.lastname}
        return JsonResponse(jsonResponse)
    except Member.DoesNotExist:
        return jsonResponse({"Error": "NO SUCH RESPONSE"}, status=404)
    #def post(self, request, format=None):
        #pass


#def Monitor(request):
 #   template = loader.get_template('myfirst.html')
   # return HttpResponse(template.render())

# Create your views here.
#def Homepage(request):
#    return HttpResponse("Welcome to the Homepage :)")
