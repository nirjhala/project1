<?php
namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class ClassModel extends Model
{
    protected $table = "classes";
    public function dept()
    {
        return $this->hasOne('App\Model\Department', 'id', 'department');
    }
    public function sections()
    {
        return $this->hasMany('App\Model\Section', 'class', 'id');
    }
}
