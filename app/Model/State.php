<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class State extends Model {
    protected $table = "states";

    public function countryName() {
        return $this->hasOne('App\Model\Country', 'id', 'country');
    }
}
