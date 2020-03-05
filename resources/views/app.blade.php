<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Lavuel') }}</title>

    <link rel="shortcut icon" href="{{ asset('favicon.ico') }}">

    <!-- Styles -->
    <link rel="stylesheet" href="{{ asset(mix('css/app.css')) }}">
</head>

<body>
    <div id="app">
        <noscript>
            <div class="app flex-row align-items-center">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-md-6 p-3">
                            <h1 class="text-center text-md-left">
                                <i class="fa fa-warning fa-2x"></i>
                            </h1>
                            <h4 class="pt-3">Browser not Support</h4>
                            <p class="text-muted">
                                Try other browser which have Javascript Support. Recommendation is
                                <a href="https://www.google.com/chrome/">
                                    Google Chrome
                                </a>
                                or
                                <a href="https://www.mozilla.org/">
                                    Mozilla Firefox
                                </a>
                                <br>
                                <a class="btn btn-primary mt-3" href="{{ url()->current() }}">
                                    Reload Page
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </noscript>
    </div>
    <script defer src="{{ asset(mix('js/app.js')) }}"></script>
</body>

</html>
