<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Subject extends Model {
    use SoftDeletes;

    public function classes() {
        return $this->hasMany('App\Model\SubjectClass', 'subject', 'id');
    }
}
