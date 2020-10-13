@extends('layouts.login')

@section('title', 'Get Started')

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

        <login-app-component />

        
    </div>
@stop
