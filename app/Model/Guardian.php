<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Guardian extends Model
{
    protected $guarded = [];
    protected $hidden = [
        'id', 'created_at', 'updated_at', 'uid'
    ];
    public function user_info() {
        return $this->hasOne('App\Model\User', 'id', 'uid');
    }
}
