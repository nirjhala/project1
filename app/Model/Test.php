<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Test extends Model
{
    protected $withCount = ['test_questions'];
    protected $guarded   = [];
    protected $appends   = ['subject_name', 'class_name', 'total_time', 'date_time', 'expiry_date_time'];

    public function getSubjectNameAttribute()
    {
        return $this->subject->name ?: null;
    }

    public function getClassNameAttribute()
    {
        return $this->class->name ?: null;
    }

    public function getTotalTimeAttribute()
    {
        return $this->duration ? gmdate("H:i:s", $this->duration * 60) : '00:00:00';
    }

    public function getDateTimeAttribute()
    {
        return $this->date ? date("d / m / Y h:i A", strtotime("{$this->date} {$this->time}")) : '00:00:00';
    }

    public function getExpiryDateTimeAttribute()
    {
        return $this->date ? date("d / m / Y h:i A", strtotime("+{$this->expire_in} hours", strtotime("{$this->date} {$this->time}"))) : '00:00:00';
    }

    public function class()
    {
        return $this->belongsTo(ClassModel::class);
    }

    public function subject()
    {
        return $this->belongsTo(Subject::class);
    }

    public function instruction()
    {
        return $this->belongsTo(Instruction::class);
    }

    public function test_questions()
    {
        return $this->belongsToMany(Question::class, 'test_questions')->withPivot(['marks', 'negative_marks']);
    }

    public function test_result()
    {
        return $this->belongsToMany(Question::class, 'test_results')->withPivot(['user_id', 'answer', 'answered']);
    }

    public function test_users()
    {
        return $this->belongsToMany(User::class, 'test_results')->withPivot(['question_id', 'answer', 'answered']);
    }
}
