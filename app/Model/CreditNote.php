<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class CreditNote extends Model
{
    protected $guarded = [];
    protected $appends = ['net_amount'];

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

    public function items()
    {
        return $this->belongsToMany(Item::class, 'credit_note_items')->withPivot('price', 'qty', 'discount_amt', 'discount_per');;
    }

    public function sale()
    {
        return $this->belongsTo(Sale::class);
    }

    public function school()
    {
        return $this->hasOne(School::class, 'uid', 'user_id');
    }
}
