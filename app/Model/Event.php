<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Event extends Model
{
    use SoftDeletes;
    
    protected $guarded = [];
    protected $casts = [
        'dates'     => 'array',
        'classes'   => 'array'
    ];

    protected $with = ['media'];

    public function media() {
        return $this->hasOne(Media::class, 'id', 'image');
    }
}
