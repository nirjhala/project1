<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Purchase extends Model
{
    protected $appends = ['supplier_name', 'net_amount'];
    protected $guarded = [];

    public function getSupplierNameAttribute()
    {
        return $this->supplier->organization_name.' \n '.$this->supplier->name;
    }

    public function getNetAmountAttribute()
    {
        $total = $this->total_amount;
        if(!empty($this->items))
        {
            foreach($this->items as $item) {
                $total += round($item->pivot->price * $item->pivot->qty * $item->gst_rate / 100, 2);
            }
        }
        return floor($total);
    }

    public function items() {
        return $this->belongsToMany(Item::class, 'purchase_items')->withPivot('price', 'qty', 'discount_amt', 'discount_per');
    }
    public function supplier()
    {
        return $this->belongsTo(Supplier::class);
    }
    public function school()
    {
        return $this->hasOne(School::class, 'uid', 'user_id');
    }
}
