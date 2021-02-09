<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Assignment extends Model
{
    use SoftDeletes;
    protected $guarded = [];

    public function getAttachmentFullUrlAttribute() {
        return $this->attachment ? url("storage/".$this->attachment) : "";
    }

    public function allocated() {
        return $this->hasMany(AssignmentStudent::class, 'assignment_id', 'id');
    }
}
