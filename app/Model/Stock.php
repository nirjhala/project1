<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Stock extends Model
{
    public function item()
    {
        return $this->belongsTo(Item::class);
    }
}
