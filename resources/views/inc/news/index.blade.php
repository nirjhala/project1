@extends('backend.layouts.master')

@section('title', 'Add News')

@section('content')
<hr>
<div class="">
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

    @if( !$lists->isEmpty() )
    <div class="table-responsive">
        <table border="1" style="width: 100%" class="table table-bordered">
            <thead>
                <tr>
                    <th>S.No.</th>
                    <th>Title</th>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody>
                @php
                $sn = $lists->firstItem();
                @endphp
                @foreach( $lists as $list )
                <tr>
                    <td>{{ $sn++ }}.</td>
                    <td>{{ $list->news_title }}</td>
                    <td>{{ $list->news_description }}</td>
                </tr>
                @endforeach
            </tbody>
        </table>
    </div>

    {{ $lists->links() }}
    @endif
</div>
<hr>
@stop
