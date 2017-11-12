<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class IndexController extends Controller
{
    public function NewIndex()
	{
	
    return view('verk5/upload',compact('moviestars'));
	}
}
