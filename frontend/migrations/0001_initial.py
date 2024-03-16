# Generated by Django 4.2.9 on 2024-03-15 14:52

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Data',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('data', models.DateField()),
                ('time', models.TimeField()),
                ('air_temp', models.DecimalField(decimal_places=2, max_digits=4)),
                ('air_humidity', models.DecimalField(decimal_places=2, max_digits=4)),
                ('soil_temp', models.DecimalField(decimal_places=2, max_digits=4)),
                ('soil_moisture', models.DecimalField(decimal_places=2, max_digits=6)),
            ],
            options={
                'db_table': 'sensor_values',
                'managed': False,
            },
        ),
    ]