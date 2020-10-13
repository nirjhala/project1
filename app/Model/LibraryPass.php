<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class LibraryPass extends Model
{
    protected $guarded = [];

    public function parent_school() {
      return $this->hasOne('App\Model\School', 'uid', 'school');
    }
}
