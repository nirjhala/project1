<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Department extends Model
{
    protected $table = "departments";

    public function classes()
    {
        return $this->hasMany('App\Model\ClassModel', 'department', 'id');
    }
}
