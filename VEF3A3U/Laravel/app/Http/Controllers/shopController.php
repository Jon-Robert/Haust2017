<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class shopController extends Controller
{
    public function index()
	{
	$location = storage_path()."/app/Json/langbest.json";
    $json = json_decode(file_get_contents($location), true);
    $langbest = $json["langbest"];
    return view('lokaverk/index',compact('langbest'));
	}

	public function getIndex($value)
	{
		$location = storage_path()."/app/Json/langbest.json";
    	$json = json_decode(file_get_contents($location), true);
    	$langbest = $json["langbest"][$value];

    	$innPutlocation = storage_path()."/app/Json/cart.json";
    	$code = json_encode($langbest);
    	
    		file_put_contents($innPutlocation,$code  , FILE_APPEND);
    		file_put_contents($innPutlocation,"," . PHP_EOL, FILE_APPEND);
    	
    	

		return view('lokaverk/derp',compact('code'));
	}

	public function getIndex2()
	{
		$location = storage_path()."/app/Json/cart.json";
    	$json = json_decode(file_get_contents($location), true);
    	return view('lokaverk/derp',compact('json'));
    	


    
    	
		
	}
}
