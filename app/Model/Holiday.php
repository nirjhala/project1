<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Holiday extends Model
{
    use SoftDeletes;
    
    protected $guarded = [];
    protected $casts = [
        'date'  => 'date: M d, Y'
    ];
}
