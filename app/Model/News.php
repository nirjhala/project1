<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class News extends Model
{
    use SoftDeletes;
    
    protected $guarded  = [];

    protected $with = ['media'];

    public function media() {
        return $this->hasOne(Media::class, 'id', 'image_id');
    }
}
