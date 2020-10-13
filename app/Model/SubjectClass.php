<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class SubjectClass extends Model {
    protected $table 		= "subject_class";

    public function cls() {
        return $this->hasOne('App\Model\ClassModel', 'id', 'class');
    }
}
