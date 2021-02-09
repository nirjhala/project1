<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class TransferCertificate extends Model
{
    use SoftDeletes;
    protected $guarded = [];
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}