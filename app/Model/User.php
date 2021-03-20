<?php
namespace App\Model;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class User extends Model
{
    use SoftDeletes;
    protected $appends = ['full_address', 'salary'];
    protected $guarded = [];
    protected $hidden  = [
        'password', 
        'remember_token',
    ];

    public function getFullAddressAttribute()
    {
        $address = $this->address1;
        if(!empty($this->address2)) {
            $address .= ', '.$this->address2;
        }
        if(!empty($this->city_id)) {
            $address .= ', '.$this->cityData->stateName->name;
            $address .= ' '.$this->cityData->name;
        }
        if(!empty($this->pin_code)) {
            $address .= ' '.$this->pin_code;
        }

        return $address;
    }

    public function getSalaryAttribute()
    {
        if($this->roleName && ($this->roleName->name == 'Teacher' || $this->roleName->name == 'Staff'))
        {
            return @$this->emp_promotion->new_salary ?: null;
        }
        return null;
    }

    public function emp_promotion()
    {
        return $this->hasOne(EmployeePromotion::class)->latest();
    }

    public function teacher_timetable()
    {
        return $this->hasMany(Timetable::class, 'teacher', 'id');
    }

    public function studentData()
    {
        return $this->hasOne('App\Model\Student', 'uid', 'id');
    }
    public function schoolData()
    {
        return $this->hasOne('App\Model\School', 'uid', 'school');
    }
    public function parent_school()
    {
        return $this->hasOne('App\Model\User', 'id', 'school');
    }
    public function media()
    {
        return $this->hasOne(Media::class, 'id', 'image');
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
        return $this->hasOne(Role::class, 'id', 'role');
    }
    public function guardian_info() {
        return $this->hasOne('App\Model\Guardian', 'uid', 'id');
    }
    public function attd()
    {
        return $this->hasOne('App\Model\Attendence', 'attendee', 'id');
    }
    public function documents()
    {
        return $this->hasMany(UserCertificate::class, 'user_id', 'id');
    }
    public function custom_fields()
    {
        return $this->belongsToMany(CustomField::class, 'user_fields')->withPivot('value');
    }
    public function direct_custom_fields()
    {
        return $this->hasMany(UserField::class);
    }
}