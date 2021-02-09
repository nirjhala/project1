<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Complain extends Model
{
    protected $guarded = [];

    protected $casts = [
        'created_at' => 'datetime:M d, Y'
    ];

    public function user () {
        return $this->hasOne('App\Model\User', 'id', 'uid');
    }

    public function teacher () {
        return $this->hasOne('App\Model\User', 'id', 'teacher_id');
    } 
}
