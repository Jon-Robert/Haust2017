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
    	$innPutlocation = storage_path()."/app/Json/cart.json";
        $data = json_decode(file_get_contents($innPutlocation),true);     
        $langbest = array($data);
        array_push($langbest,$json["langbest"][$value]);
        $derp = $langbest;
        $sam = json_encode($derp);
        
        file_put_contents($innPutlocation,$sam );
		return view('lokaverk/derp',compact('langbest'));
	}

	public function getIndex2()
	{
		$location = storage_path()."/app/Json/cart.json";
    	$json = json_decode(file_get_contents($location), true);
    	return view('lokaverk/derp',compact('json'));
    	


    
    	
		
	}
}
