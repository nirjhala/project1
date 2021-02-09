<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class AdmissionEnquiry extends Model
{
    use softDeletes;
    protected $guarded = [];

    protected $casts = [
        'dob' => 'date: d M Y'
    ];
}
