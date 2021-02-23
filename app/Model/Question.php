<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Question extends Model
{
    use SoftDeletes;
    protected $guarded = [];

    public function test()
    {
        return $this->hasMany(TestQuestion::class);
    }
}
