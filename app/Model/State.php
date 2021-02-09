<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class State extends Model {
    protected $table = "states";

    public function countryName() {
        return $this->hasOne(Country::class, 'id', 'country');
    }

    public function cities()
    {
        return $this->hasMany(City::class, 'state', 'id');
    }
}
