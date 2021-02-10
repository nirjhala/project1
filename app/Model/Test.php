<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Test extends Model
{
    protected $withCount = ['test_questions'];
    protected $guarded   = [];

    public function test_questions()
    {
        return $this->belongsToMany(Question::class, 'test_questions');
    }
}
