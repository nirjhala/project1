<?php

namespace App\Http\Controllers\api;

use App\Model\PageTemplate;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class PageTemplateController extends Controller
{
    public function all() {
        $page_templates = PageTemplate::orderBy('name')->pluck('name');
        return response()->json($page_templates);
    }
}
