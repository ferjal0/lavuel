# Lavuel
### [Lavuel][lavuel-ferjalo] in https://ferjalo.com.ar
### Admin scaffolding with Laravel + Passport + Vue 

## What's inside
* [Laravel][laravel] 5.8, A PHP framework for web artisans
* Useful libraries: [Axios][axios], [Moment.js][moment], [Lodash][lodash]
* [Vue Router][vue-router] and [Vuex][vuex], set out of the box
* [Laravel Page Speed][laravel-page-speed], Simple package to minify HTML output on demand which results in a 35%+ optimization

## Requirement
* **PHP** >= 7.1.3
* OpenSSL PHP Extension
* PDO PHP Extension
* Mbstring PHP Extension
* Tokenizer PHP Extension
* XML PHP Extension
* Ctype PHP Extension
* JSON PHP Extension
* **Node** >= 8.9.4
* **NPM** >= 5.6.0

## How to install it

### Clone this repo
```bash
git clone https://github.com/ferjalo/lavuel.git
cd lavuel
rm -r .git
```
### Install dependencies
```bash
composer install
npm install
```
### Create application key
```bash
cp .env.example .env
php artisan key:generate
```
### Migrate database & install passport credentials
```bash
# After you make the migration and passport install you have to setup your database
# For that just create your mysql database. Then add the database name, user & password to the .env file
php artisan migrate
php artisan passport:install
```
### Add write permission (only for Unix)
```bash
chmod -R go+w storage bootstrap/cache
```
### Compile static assets
```bash
# for Development
npm run dev

# for Production
npm run prod

# for Development with HMR (Hot Module Replacement)
npm run hot
```

## License
This project is licensed under the MIT License.

[laravel]: https://laravel.com
[axios]: https://github.com/axios/axios
[jquery]: https://jquery.com/
[lodash]: https://lodash.com/
[moment]: https://momentjs.com/
[vue-router]: https://router.vuejs.org/
[vuex]: https://vuex.vuejs.org/
[offline-plugin]: https://github.com/NekR/offline-plugin
[workbox]: https://developers.google.com/web/tools/workbox/
[laravel-page-speed]: https://github.com/renatomarinho/laravel-page-speed
[lavuel-ferjalo]: https://lavuel.ferjalo.com.ar

### Made with ❤️ by https://ferjalo.com.ar
