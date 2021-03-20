<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class FeePayment extends Model
{
    public function student()
    {
        return $this->hasOne(User::class, 'id', 'sid');
    }
}