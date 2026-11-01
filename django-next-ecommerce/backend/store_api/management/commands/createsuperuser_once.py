from django.core.management.base import BaseCommand, CommandError
from store_api.models import User

class Command(BaseCommand):
    help = 'Creates the master superadmin user strictly once. Prevents subsequent superadmin escalations.'

    def add_arguments(self, parser):
        parser.add_argument('--email', required=True, type=str, help='Superadmin email address')
        parser.add_argument('--password', required=True, type=str, help='Superadmin secure password')
        parser.add_argument('--first-name', default='Master', type=str, help='First name')
        parser.add_argument('--last-name', default='Admin', type=str, help='Last name')

    def handle(self, *args, **options):
        # Strict Invariant: Only 1 superadmin ever allowed
        if User.objects.filter(is_superuser=True).exists():
            raise CommandError("SECURITY LOCK ACTIVE: Master superadmin has already been initialized! No additional superadmins can be created.")

        email = options['email'].strip().lower()
        password = options['password']
        first_name = options.get('first_name', 'Master')
        last_name = options.get('last_name', 'Admin')

        if len(password) < 6:
            raise CommandError("Password must be at least 6 characters long.")

        user = User.objects.create_superuser(
            email=email,
            password=password,
            first_name=first_name,
            last_name=last_name
        )

        self.stdout.write(self.style.SUCCESS(
            f"Master Superadmin successfully initialized for [{user.email}]. Security lock has been permanently engaged."
        ))
