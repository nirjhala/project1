<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class School extends Model
{
    protected $guarded  = [];
    protected $appends  = ['logo_url', 'favicon_url'];
    protected $with     = ['user'];

    public function getLogoUrlAttribute()
    {
        return !empty($this->logo) ? url('img/profiles/'.$this->logo) : '';
    }
    public function getFaviconUrlAttribute()
    {
        return !empty($this->favicon) ? url('img/profiles/'.$this->favicon) : '';
    }
    public function user()
    {
        return $this->hasOne(User::class, 'id', 'uid');
    }
    public function city()
    {
        return $this->hasOne(City::class, 'id', 'city_id');
    }
}
