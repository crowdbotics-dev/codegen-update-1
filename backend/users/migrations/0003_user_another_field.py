# Generated by Django 2.2.28 on 2022-11-08 23:56

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0002_auto_20221108_2204'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='another_field',
            field=models.BigIntegerField(blank=True, null=True),
        ),
    ]
