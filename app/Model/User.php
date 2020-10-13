<?php
namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class User extends Model
{
    protected $guarded = [];
    protected $hidden  = [
        'password', 'remember_token',
    ];
    protected $casts = [
        // 'dob' => 'date:d-M-Y',
    ];
    public function studentData()
    {
        return $this->hasOne('App\Model\Student', 'uid', 'id');
    }
    public function schoolData()
    {
        return $this->hasOne('App\Model\School', 'uid', 'id');
    }
    public function parent_school()
    {
        return $this->hasOne('App\Model\User', 'id', 'school');
    }
    public function media()
    {
        return $this->hasOne('App\Model\Media', 'id', 'image');
    }
    public function pincodeData()
    {
        return $this->hasOne('App\Model\Pincode', 'pincode', 'pin_code');
    }
    public function cityData()
    {
        return $this->hasOne('App\Model\City', 'id', 'city_id');
    }
    public function roleName()
    {
        return $this->hasOne('App\Model\Role', 'id', 'role');
    }
    public function guardian_info() {
        return $this->hasOne('App\Model\Guardian', 'uid', 'id');
    }
    public function attd()
    {
        return $this->hasOne('App\Model\Attendence', 'attendee', 'id');
    }
}
