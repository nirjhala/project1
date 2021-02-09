<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Media extends Model {
    protected $table 		= "media";

    protected $appends = ['image_url'];

    public function getImageUrlAttribute() {
        $thumb = $medium = $large = $full = "";
        if(!empty($this->image)) {
            $thumb      = url('uploads/thumb/'.$this->image);
            $medium     = url('uploads/medium/'.$this->image);
            $large      = url('uploads/large/'.$this->image);
            $full       = url('uploads/full/'.$this->image);
        }
        return compact('thumb', 'medium', 'large', 'full');
    }
}
