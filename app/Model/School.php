<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class School extends Model
{
    protected $table    = "schools";
    protected $guarded  = [];

    public function user()
    {
        return $this->hasOne('App\Model\User', 'id', 'uid');
    }
    public function city()
    {
        return $this->hasOne('App\Model\City', 'id', 'city_id');
    }
}
