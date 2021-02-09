<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class OnlineClass extends Model
{
    use SoftDeletes;
    protected $guarded  = ['id', 'created_at', 'updated_at', 'deleted_at'];
    protected $hidden   = ['deleted_at'];
    protected $appends  = ['teacher_name', 'class_name', 'subject_name'];

    public function getTeacherNameAttribute()
    {
        return $this->user->name ?: null;
    }
    public function getClassNameAttribute()
    {
        return $this->class ? "{$this->class->dept->dept_name} {$this->class->name}" : null;
    }
    public function getSubjectNameAttribute()
    {
        return $this->subject->name ?: null;
    }

    public function students()
    {
        $this->belongsToMany(User::class, 'online_class_students');
    }
    public function user()
    {
        return $this->belongsTo(User::class);
    }
    public function subject()
    {
        return $this->belongsTo(Subject::class);
    }
    public function class()
    {
        return $this->belongsTo(ClassModel::class);
    }
}
