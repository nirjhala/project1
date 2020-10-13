<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class RoutePoint extends Model {
    public $timestamps = false;
    protected $table = "route_points";

    public function routeName() {
        return $this->hasOne('App\Model\Routes', 'id', 'route');
    }
}
