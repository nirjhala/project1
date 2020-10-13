<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Hostel extends Model {
    public function pin() {
        return $this->hasOne('App\Model\Pincode', 'id', 'pincode');
    }
    public function city_name() {
        return $this->hasOne('App\Model\City', 'id', 'city_id');
    }
}
