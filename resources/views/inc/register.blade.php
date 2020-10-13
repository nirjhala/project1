@extends('layouts.login')

@section('title', 'Register')

@section('content')
    <div class="loginForm" id="app">

        @if( $errors->any() )
            <div class="alert alert-danger" style="color: red;">
                @foreach($errors->all() as $error)
                    <li>{!! $error !!}</li>
                @endforeach
            </div>
        @endif

        @if (\Session::has('success'))
    	    <div class="alert alert-success" style="color: green">
    		    {!! \Session::get('success') !!}</li>
    		</div>
    	@endif

        @if (\Session::has('danger'))
    	    <div class="alert alert-danger">
    		    {!! \Session::get('danger') !!}</li>
    		</div>
    	@endif

        <!-- Register Page Start Here -->
        <div class="login-page-wrap">
            <div class="login-page-content">
                <div class="login-box">
                    <!-- <div class="item-logo">
                        <img src="img/logo2.png" alt="logo">
                    </div> -->

                    <form class="login-form" @submit.prevent="loginUser( )">
                        <div class="form-group">
                            <label>Username</label>
                            <input type="text" placeholder="Enter usrename" v-model="user_login" class="form-control">
                            <i class="far fa-envelope"></i>
                        </div>
                        <div class="form-group">
                            <label>Password</label>
                            <input type="password" placeholder="Enter password" v-model="password" class="form-control">
                            <i class="fas fa-lock"></i>
                        </div>
                        <div class="form-group d-flex align-items-center justify-content-between">
                            <div class="form-check">
                                <input type="checkbox" class="form-check-input" id="remember-me">
                                <label for="remember-me" class="form-check-label">Remember Me</label>
                            </div>
                        </div>
                        <div class="form-group">
                            <button type="submit" class="login-btn">Login</button>
                        </div>
                    </form>
                </div>
                <!-- <div class="sign-up">Already have an account? <a href="//acc.localhost/school-management/register">Login now!</a></div> -->
            </div>
        </div>
        <!-- Register Page End Here -->
    </div>
@stop
