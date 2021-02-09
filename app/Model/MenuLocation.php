<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class MenuLocation extends Model
{
    protected $guarded = [];
    public function menu() {
        return $this->hasMany(MenuLink::class, 'ml_id', 'id');
    }
}
