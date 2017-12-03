<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('show','jsonController@jsonIndex');
route::get('json/{id}','jsonController@jsonDetail');
Route::get('test','jsonController@test');
Route::get('api','jsonController@getJson');
Route::get('lokaverk','shopController@index');
Route::get('lokaverk/{id}','shopController@getIndex');
Route::get('shopping','shopController@getCart');
Route::get('shopping/{id}','shopController@removeIndex');


route::get('newIndex','IndexController@newIndex');


Route::get('/master', function () {
    return view('/Layout/header');
});

Route::get('/test', function () {
    return view('insert');
});

Route::get('/', function () {
    return view('welcome');
});

Route::get('index', function(){

	$books = DB::table('books')->get();
	return view('index', compact('books'));
});

Route::get('/index/{book}', function($id){

	$books = DB::table('books')->find($id);
	return view('book', compact('books'));
});
