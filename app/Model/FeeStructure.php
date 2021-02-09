<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class FeeStructure extends Model
{
    protected $guarded = [];

    public function installments() {
        return $this->hasMany('\App\Model\FeeInstallment', 'fee_structure_id', 'id');
    }
    public function student() {
        return $this->hasOne('App\Model\Student', 'uid', 'sid');
    }
}
