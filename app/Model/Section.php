<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Section extends Model
{
    use SoftDeletes;
    protected $guarded = [];

    public function cls()
    {
        return $this->hasOne(ClassModel::class, 'id', 'class');
    }

    public function admit_card()
    {
        return $this->hasMany(AdmitCard::class);
    }
}
