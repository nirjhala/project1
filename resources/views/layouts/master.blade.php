<!doctype html>
<html class="no-js" lang="">
<meta http-equiv="content-type" content="text/html;charset=UTF-8" />
<head>
    <meta charset="utf-8">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <title>School Management</title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- Favicon -->
    <link rel="shortcut icon" type="image/x-icon" href="img/favicon.png">

    <meta name="csrf-token" content="{{ csrf_token() }}">

    {{ Html::style('fonts/flaticon.css') }}
    {{ Html::style('css/app.css') }}

    <!-- {{ Html::script('js/modernizr-3.6.0.min.js', ['defer' => 'defer']) }} -->
</head>

<body>
    <div id="app">
        <app-component :app="this" />
    </div>

    {{ Html::script('js/jquery-3.3.1.min.js') }}
    {{ Html::script('js/validation.js') }}
    {{ Html::script('js/app.js') }}
</body>
</html>
