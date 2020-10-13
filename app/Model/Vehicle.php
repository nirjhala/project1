<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Vehicle extends Model
{
    public function driverName()
    {
        return $this->hasOne('App\Model\User', 'id', 'driver');
    }
    public function routes()
    {
        return $this->hasMany('App\Model\Routes', 'vehicle', 'id');
    }
}
