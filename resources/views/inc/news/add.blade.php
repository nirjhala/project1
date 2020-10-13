@extends('backend.layouts.master')

@section('title', 'Add News')

@section('content')
<hr>
<div class="">
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
        <div class="alert alert-danger" style="color: red;">
            {!! \Session::get('danger') !!}</li>
        </div>
    @endif
    {{ Form::open() }}
    <p class="">
        {{ Form::label('news_title') }}
        {{ Form::text('news_title', '', ['class' => 'form-control']) }}
    </p>
    <p class="">
        {{ Form::label('news_description') }}
        {{ Form::textarea('news_description', '', ['class' => 'form-control']) }}
    </p>
    <p class="">
        {{ Form::submit('Save') }}
    </p>
    {{ Form::close() }}
</div>
<hr>
@stop
