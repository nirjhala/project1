<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Session extends Model {
    use SoftDeletes;
    
    protected $table    = "session";
    protected $guarded  = [];
}
