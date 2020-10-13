<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Shift extends Model
{
    protected $table = "shift";
    public function timeslots()
    {
        return $this->hasMany('App\Model\Timeslot', 'shift', 'id');
    }
}
