<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Student extends Model
{
    protected $appends = ['class_name', 'father_name', 'mother_name'];
    protected $guarded = [];

    public function getRouteKeyName()
    {
        return 'uid';
    }
    public function getClassNameAttribute()
    {
        $className = $this->SectionName ? "{$this->SectionName->cls->name} - {$this->SectionName->name}" : '';
        return $className;
    }
    public function getFatherNameAttribute()
    {
        return $this->father_info ? $this->father_info->name : '';
    }
    public function getMotherNameAttribute()
    {
        return $this->mother_info ? $this->mother_info->name : '';
    }
    public function marks()
    {
        return $this->hasMany(Marksheet::class, 'user_id', 'uid');
    }
    public function user()
    {
        return $this->hasOne(User::class, 'id', 'uid');
    }
    public function SectionName()
    {
        return $this->hasOne(Section::class, 'id', 'section');
    }
    public function father_info()
    {
        return $this->hasOne(User::class, 'id', 'father');
    }
    public function mother_info()
    {
        return $this->hasOne(User::class, 'id', 'mother');
    }
    public function guardian_info()
    {
        return $this->hasOne(User::class, 'id', 'guardian');
    }
    public function fees_structure() {
        return $this->hasOne(FeeStructure::class, 'sid', 'uid');
    }
    public function religion_info() {
        return $this->hasOne(Religion::class, 'id', 'religion');
    }
}
