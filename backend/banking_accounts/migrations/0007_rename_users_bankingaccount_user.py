# Generated by Django 4.0.4 on 2022-06-02 14:56

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('banking_accounts', '0006_remove_bankingaccount_customer'),
    ]

    operations = [
        migrations.RenameField(
            model_name='bankingaccount',
            old_name='users',
            new_name='user',
        ),
    ]
