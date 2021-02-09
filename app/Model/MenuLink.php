<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class MenuLink extends Model
{
    protected $guarded = [];
    protected $hiddedn = [
        'created_at',
        'updated_at'
    ];

    public function submenu() {
        return $this->hasMany(MenuLink::class, 'parent', 'id');
    }
    public function page() {
        return $this->belongsTo(Page::class, 'p_id');
    }
}
