<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Reciept extends Model
{
    protected $guarded = [];
    public function sale()
    {
        return $this->belongsTo(Sale::class);
    }
    public function school()
    {
        return $this->hasOne(School::class, 'uid', 'user_id');
    }
}
