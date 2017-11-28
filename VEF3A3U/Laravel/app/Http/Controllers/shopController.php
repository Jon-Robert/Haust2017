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
        // sæki id í json sem ég valdi 
		$location = storage_path()."/app/Json/langbest.json";
    	$json = json_decode(file_get_contents($location), true);
    	$langbest = $json["langbest"][$value];
        // encode object frá langbest json
        $code = json_encode($langbest);
        // sekji gögnin í cart json
    	$innPutlocation = storage_path()."/app/Json/cart.json";
        $data = json_decode(file_get_contents($innPutlocation),true);
        // pusha object úr lanbest json í cart json 
        array_push($data, $code);
        // encoda cart json
        $obj = json_encode($data);
        // skila cart json
        file_put_contents($innPutlocation,$obj );
		return view('lokaverk/derp',compact('data'));
	}

	public function getIndex2()
	{
		$location = storage_path()."/app/Json/cart.json";
    	$json = json_decode(file_get_contents($location), true);
    	return view('lokaverk/derp',compact('json'));
    	


    
    	
		
	}
}
