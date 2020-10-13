<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Routes extends Model {
    protected $table = "routes";

    public function points() {
        return $this->hasMany('App\Model\RoutePoint', 'route', 'id');
    }
    public function vehicleInfo() {
        return $this->hasOne('App\Model\Vehicle', 'id', 'vehicle');
    }
}
