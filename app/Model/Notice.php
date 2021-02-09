<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Notice extends Model
{
    use SoftDeletes;
    protected $guarded = [];
    
    protected $appends = ['full_title', 'attachment_url'];

    public function getFullTitleAttribute()
    {
        $title = $this->title;
        $sectionArr = [];
        if(!empty($this->sections) && count($this->sections) > 0)
        {
            foreach ($this->sections as $key => $section) {
                # code...
                $className = !empty($section->cls->dept->dept_name) && strtolower($section->cls->dept->dept_name) != 'common'
                    ? $section->cls->dept->dept_name : '';
    
                if(!empty($section->cls->name))
                {
                    $className .= " {$section->cls->name}";
                }
    
                $className .= " {$section->name}";
                
                $sectionArr[] = $className;
            }
            $title .= " for class ".implode(", ", $sectionArr);
        }
        return $title;
    }

    public function getAttachmentUrlAttribute()
    {
        return !empty($this->attachment) ? url('storage/'.$this->attachment) : null;
    }

    public function sections()
    {
        return $this->belongsToMany(Section::class, 'notice_sections');
    }
}
