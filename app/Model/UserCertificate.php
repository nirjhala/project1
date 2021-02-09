<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class UserCertificate extends Model
{
    protected $guarded = [];

    protected $appends = ["file_url"];

    protected $with   = ["document"];

    public function getFileUrlAttribute()
    {
        return url('storage/'.$this->file);
    }

    public function document()
    {
        return $this->hasOne(Certificate::class, 'id', 'certificate_id');
    }
}
