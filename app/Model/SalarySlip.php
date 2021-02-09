<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class SalarySlip extends Model
{
    use SoftDeletes;
    protected $guarded = ['id', 'created_at', 'updated_at', 'deleted_at'];
    protected $hidden  = ['deleted_at'];
    protected $appends = ['slip_no'];

    public function getSlipNoAttribute()
    {
        return sprintf("#%04d/%02d/%04d", $this->year, $this->month, $this->slip_number);
    }

    public function salary_data()
    {
        return $this->hasMany(SalarySlipData::class);
    }
}
