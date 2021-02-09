<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Payment extends Model
{
    protected $guarded = [];

    public function purchase()
    {
        return $this->belongsTo(Purchase::class);
    }

    public function school()
    {
        return $this->hasOne(School::class, 'uid', 'user_id');
    }
}
