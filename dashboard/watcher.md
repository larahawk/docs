# Installation
In order for Larahawk to start recording events, you'll have to install our watcher package onto your app. Installation and set-up should take less than 5 minutes following the steps below.

First, run the following command in the root directory of your application:

```bash
composer require larahawk/watcher
```

Next, run this Artisan command to publish the `config/larahawk.php` file:

```bash
php artisan vendor:publish --provider="Larahawk\Watcher\LarahawkServiceProvider"
```

Assuming you've created a property in your Larahawk dashboard, navigate to it and copy the API key that was generated. Open up your `.env` file and add the following to the bottom:

```php
LARAHAWK_API_KEY={property-api-key}
```

Save the file, and set-up is complete!