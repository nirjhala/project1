<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class BookIssue extends Model
{
    protected $table    = "book_issue";
    protected $guarded  = [];

    protected $casts    = [
        "created_at"    => "date: d M Y"
    ];

    public function user() {
        return $this->hasOne('App\Model\LibraryPass', 'id', 'pass_id');
    }

    public function book() {
        return $this->hasOne('App\Model\Book', 'id', 'book_id');
    }
}
