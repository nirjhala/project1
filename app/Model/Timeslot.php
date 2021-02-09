<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Timeslot extends Model {
  use SoftDeletes;
  protected $table 		= "class_timing";

  protected $casts    = [
    'time_start'    => 'date:h:i A',
    'time_end'    => 'date:h:i A',
  ];

  public function shift() {
      return $this->hasOne(Shift::class, 'id', 'shift');
  }
}
