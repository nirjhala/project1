<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Section extends Model
{
    protected $guarded = [];

    public function cls()
    {
        return $this->hasOne('App\Model\ClassModel', 'id', 'class');
    }
}
