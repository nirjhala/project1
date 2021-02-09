<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Fees extends Model
{
    protected $table = "fees";
    protected $guarded = [];

    public function ftype() {
        return $this->hasOne('App\Model\FeeType', 'id', 'fee_type_id');
    }
}
