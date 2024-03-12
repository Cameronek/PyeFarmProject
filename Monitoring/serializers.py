from rest_framework import serializers
from.models import Member

class MemberSerializer(serializers.ModelSerializer):
    class Meta:
        model = Member
        fields = ('id','firstname', 'lastname')

class CreateMemberSerializer(serializers.ModelSerializer):
    class Meta:
        model = Member
        fields = ('firstname', 'lastname')