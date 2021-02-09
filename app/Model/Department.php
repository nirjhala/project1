<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Department extends Model
{
    use SoftDeletes;

    public function classes()
    {
        return $this->hasMany(ClassModel::class, 'department', 'id');
    }
}
