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

    {{ Html::style('css/normalize.css') }}
    {{ Html::style('css/main.css') }}
    {{ Html::style('css/all.min.css') }}
    {{ Html::style('fonts/flaticon.css') }}
    {{ Html::style('css/fullcalendar.min.css') }}
    {{ Html::style('css/bootstrap.min.css') }}
    {{ Html::style('css/animate.min.css') }}
    <!-- {{ Html::style('css/select2.min.css') }} -->
    {{ Html::style('css/style.css') }}
    {{ Html::style('admin/css/style.min.css') }}
    {{ Html::style('icomoon/style.min.css') }}

    <!-- {{ Html::script('js/modernizr-3.6.0.min.js', ['defer' => 'defer']) }} -->
</head>

<body>
    <!-- Preloader Start Here -->
    <div id="preloader"></div>
    <!-- Preloader End Here -->
    <div id="app">
        <app-component :app="this" />
    </div>

    <script type="text/javascript">
        var BASE_URL = "{{ url('/') }}";
    </script>

    {{ Html::script('js/jquery-3.3.1.min.js', ['defer' => 'defer']) }}
    {{ Html::script('js/plugins.js', ['defer' => 'defer']) }}
    {{ Html::script('js/jquery.counterup.min.js', ['defer' => 'defer']) }}
    {{ Html::script('js/moment.min.js', ['defer' => 'defer']) }}
    {{ Html::script('js/jquery.waypoints.min.js', ['defer' => 'defer']) }}
    {{ Html::script('js/jquery.scrollUp.min.js', ['defer' => 'defer']) }}
    <!-- {{ Html::script('js/select2.min.js', ['defer' => 'defer']) }} -->
    {{ Html::script('js/sweetalert.min.js', ['defer' => 'defer']) }}
    {{ Html::script('js/fullcalendar.min.js', ['defer' => 'defer']) }}
    {{ Html::script('js/Chart.min.js', ['defer' => 'defer']) }}
    {{ Html::script('js/app.js', ['defer' => 'defer']) }}
    {{ Html::script('js/validation.js', ['defer' => 'defer']) }}
    {{ Html::script('js/main.js', ['defer' => 'defer']) }}
</body>
</html>
