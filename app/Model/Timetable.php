<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Timetable extends Model
{
    protected $guarded = [];

    public function subject_info()
    {
        return $this->hasOne('App\Model\Subject', 'id', 'subject');
    }

    public function teacher_info()
    {
        return $this->hasOne('App\Model\User', 'id', 'teacher');
    }

    public function timeslot_info()
    {
        return $this->hasOne('App\Model\Timeslot', 'id', 'timeslot');
    }

    public function section_info()
    {
        return $this->hasOne('App\Model\Section', 'id', 'section');
    }
}
