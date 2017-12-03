<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Session;

class shopController extends Controller
{
    public function index()
	{
	$location = storage_path()."/app/Json/langbest.json";
    $json = json_decode(file_get_contents($location), true);
    $total = storage_path()."/app/Json/cart.json";
    $cart = json_decode(file_get_contents($total), true);
        $price = 0;
        foreach ($cart as $key) {
            $price+=$key['price'];
        }
    $langbest = $json["langbest"];
    return view('lokaverk/index',compact('langbest'),compact('price'));
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
		 return back()->withInput();
	}

	public function getCart()
	{
		
        $location = storage_path()."/app/Json/cart.json";
        $cart = json_decode(file_get_contents($location), true);
        $price = 0;
        foreach ($cart as $key) {
            $price+=$key['price'];
        }
        if ($price==0) {
            return redirect('lokaverk');
        }
    	return view('lokaverk/shoppingcart',compact('cart'),compact('price'));
		
	}


    public function removeIndex($id)
    {
        
        $innPutlocation = storage_path()."/app/Json/cart.json";
        $cart = json_decode(file_get_contents($innPutlocation),true);  
        $shoppingCart = array();
        foreach ($cart as $key ) {
            if ($key['id'] == $id) {
              
            }
            else{
                array_push($shoppingCart, $key);
            }
        
        }
        file_put_contents($innPutlocation,json_encode($shoppingCart));

         return back()->withInput();
    }

    
   


}
