<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class EmployeePromotion extends Model
{
    use SoftDeletes;

    protected $guarded = ['created_at', 'updated_at', 'deleted_at', 'id'];
    protected $hidden  = ['deleted_at'];
    protected $appends = ['grade_name'];


    public function getGradeNameAttribute()
    {
        return $this->pay_grade->name ?: null;
    }

    public function pay_grade()
    {
        return $this->belongsTo(PayGrade::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
