<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Pincode extends Model {
    protected $table = "pincodes";

    public function cityName() {
        return $this->hasOne('App\Model\City', 'id', 'city');
    }
}
