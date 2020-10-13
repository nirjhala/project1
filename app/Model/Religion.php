<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Religion extends Model {
    protected $table = "religions";

    public function students() {
        return $this->hasMany('App\Model\Student', 'religion', 'id');
    }
}
