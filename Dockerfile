# Use an official PHP image with Apache pre-installed
FROM php:8.1-apache

# Install dependencies
RUN docker-php-ext-install mysqli && docker-php-ext-enable mysqli

# Copy the current directory contents into the container's working directory
COPY . /var/www/html

# Set the correct permissions for Apache
RUN chown -R www-data:www-data /var/www/html \
    && chmod -R 755 /var/www/html

# Expose port 80
EXPOSE 3000

# Start Apache in the foreground
CMD ["apache2-foreground"]