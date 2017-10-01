<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class jsonController extends Controller
{
    
	public function jsonIndex()
	{
	$location = storage_path()."/app/Json/moviestars.json";
    $json = json_decode(file_get_contents($location), true);
    $moviestars = $json["moviestars"];
    return view('verk5/upload',compact('moviestars'));
	}

	public function jsonDetail($value)
	{
	$location = storage_path()."/app/Json/moviestars.json";
    $json = json_decode(file_get_contents($location), true);
    $moviestars = $json["moviestars"][$value];
    return view('verk5/detail',compact('moviestars'));
	}










}
