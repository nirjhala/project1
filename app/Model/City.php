<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class City extends Model {
    protected $table = "cities";

    public function stateName() {
        return $this->hasOne('App\Model\State', 'id', 'state');
    }
}
