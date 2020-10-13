<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Subject extends Model {
    protected $table 		= "subjects";

    public function classes() {
        return $this->hasMany('App\Model\SubjectClass', 'subject', 'id');
    }
}
