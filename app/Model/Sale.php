<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Sale extends Model
{
    protected $appends = ['customer_name', 'full_invoice_no', 'net_amount'];
    protected $guarded = [];

    public function getCustomerNameAttribute()
    {
        return $this->customer ? $this->customer->name : null;
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

    public function getFullInvoiceNoAttribute()
    {
        return sprintf("%s/%04d", $this->session->session_name, $this->invoice_no);
    }

    public function items() {
        return $this->belongsToMany(Item::class, 'sale_items')->withPivot('price', 'qty', 'discount_amt', 'discount_per');
    }
    public function customer()
    {
        return $this->belongsTo(User::class);
    }
    public function school()
    {
        return $this->hasOne(School::class, 'uid', 'user_id');
    }
    public function session()
    {
        return $this->belongsTo(Session::class);
    }
}
