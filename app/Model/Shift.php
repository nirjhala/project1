<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Shift extends Model
{
    use SoftDeletes;

    protected $table = "shift";
    public function timeslots()
    {
        return $this->hasMany('App\Model\Timeslot', 'shift', 'id');
    }
}
