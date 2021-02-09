<?php
namespace App\Model;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class ClassModel extends Model
{
    use SoftDeletes;
    protected $table = "classes";
    public function dept()
    {
        return $this->hasOne(Department::class, 'id', 'department');
    }
    public function sections()
    {
        return $this->hasMany(Section::class, 'class', 'id');
    }

    public function getFullClassAttribute() {
        return !empty($this->dept->dept_name) ? $this->name . ' (' . $this->dept->dept_name . ')' : $this->name;
    }
}
