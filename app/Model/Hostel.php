<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Hostel extends Model {
    use SoftDeletes;

    public function pin() {
        return $this->hasOne(Pincode::class, 'id', 'pincode');
    }
    public function city_name() {
        return $this->hasOne(City::class, 'id', 'city_id');
    }
}
