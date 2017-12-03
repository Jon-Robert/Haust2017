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
   
        $cart = array($json["langbest"][$value]);
        if (is_array($data) || is_object($data))
        {
            foreach ($data as $key ) {
            array_push($cart, $key);
        }
        }
        file_put_contents($innPutlocation,json_encode($cart));
		return view('lokaverk/derp',compact('data'));
	}

	public function getIndex2()
	{
		$location = storage_path()."/app/Json/cart.json";
    	$json = json_decode(file_get_contents($location), true);
    	return view('lokaverk/derp',compact('json'));
    	


    
    	
		
	}
}
