<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class AdmitCard extends Model
{
    protected $guarded = [];

    public function subjects()
    {
        return $this->belongsToMany(Subject::class, 'admit_card_subjects')->withpivot('date', 'time');
    }
}
