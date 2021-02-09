<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Deduction extends Model
{
    protected $guarded = ['id', 'created_at', 'updated_at', 'deleted_at'];
    protected $hidden  = ['deleted_at'];
}
