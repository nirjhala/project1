<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Student extends Model
{
    protected $table    = "students";
    protected $fillable = [ 'uid', 'roll_no', 'reg_no', 'blood_group', 'religion', 'cast', 'category', 'section', 'short_bio', 'father', 'mother', 'guardian', 'guardian_relation', 'admission_date', 'signature' ];
    // protected $guarded = [];

    public function user()
    {
        return $this->hasOne('App\Model\User', 'id', 'uid');
    }
    public function SectionName()
    {
        return $this->hasOne('App\Model\Section', 'id', 'section');
    }
    public function father_info()
    {
        return $this->hasOne('App\Model\User', 'id', 'father');
    }
    public function mother_info()
    {
        return $this->hasOne('App\Model\User', 'id', 'mother');
    }
    public function guardian_info()
    {
        return $this->hasOne('App\Model\User', 'id', 'guardian');
    }
}
