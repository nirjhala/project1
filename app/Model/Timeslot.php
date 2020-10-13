<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Timeslot extends Model {
    protected $table 		= "class_timing";

    protected $casts    = [
      'time_start'    => 'date:h:i A',
      'time_end'    => 'date:h:i A',
    ];

    public function shift() {
        return $this->hasOne('App\Model\Shift', 'id', 'shift');
    }
}
