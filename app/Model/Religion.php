<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Religion extends Model {
    use SoftDeletes;

    public function students() {
        return $this->hasMany(Student::class, 'religion', 'id');
    }
}
