<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Vehicle extends Model
{
    use SoftDeletes;
    public function driverName()
    {
        return $this->hasOne(User::class, 'id', 'driver');
    }
    public function routes()
    {
        return $this->hasMany(Routes::class, 'vehicle', 'id');
    }
}
