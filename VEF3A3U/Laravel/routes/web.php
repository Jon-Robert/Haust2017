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



Route::get('/', function () {
    return view('index');
});

Route::get('index', function(){

	$books = DB::table('books')->get();
	return view('index', compact('books'));
});

Route::get('/index/{book}', function($id){

	$books = DB::table('books')->find($id);
	return view('book', compact('books'));
});
