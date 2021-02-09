<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class FeeInstallment extends Model
{
    protected $guarded = [];

    public function structure() {
        return $this->hasOne('App\Model\FeeStructure', 'id', 'fee_structure_id');
    }
}
