<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Supplier extends Model
{
    use SoftDeletes;

    protected $appends = ['full_address'];
    protected $guarded = [];

    public function getFullAddressAttribute()
    {
        $address = "{$this->address} {$this->city->name}, {$this->city->stateName->name}, {$this->city->stateName->countryName->name} {$this->pincode}";
        return $address;
    }

    public function city()
    {
        return $this->belongsTo(City::class);
    }
}
