<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Page extends Model
{
    use SoftDeletes;
    protected $guarded = [];

    public function menu_link() {
        return $this->hasOne(MenuLink::class, 'p_id');
    }
}
