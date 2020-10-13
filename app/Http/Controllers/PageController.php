<?php

namespace App\Http\Controllers;

use Illuminate\Routing\Controller;

class PageController extends Controller {
    public function aboutUs() {
        return view('frontend.inc.about_us');
    }
}
