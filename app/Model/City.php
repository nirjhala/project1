<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class City extends Model {
    protected $with = ['stateName'];
    
    public function stateName() {
        return $this->hasOne('App\Model\State', 'id', 'state');
    }
}
