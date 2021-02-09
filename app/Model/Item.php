<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Item extends Model
{
    use SoftDeletes;
    protected $appends = ['stock'];
    protected $guarded = [];

    public function getStockAttribute()
    {
        $stocks = $this->stocks;
        $total_stock = 0;
        if(!empty($stocks))
        {
            foreach($stocks as $stc)
            {
                $total_stock += $stc->qty_in;
                $total_stock -= $stc->qty_out;
            }
        }
        return $total_stock;
    }

    public function stocks()
    {
        return $this->hasMany(Stock::class);
    }
}
