<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\FelhasznalokController;
use App\Http\Controllers\HirdetesController;
use App\Http\Controllers\TermekekController;
use App\Http\Controllers\RendelesController;



Route::get('/felhasznalok',[FelhasznalokController::class,'index']);
Route::post('/felhasznalok',[FelhasznalokController::class, 'store']);
Route::post('/felhasznalok/bejelentkezes',[FelhasznalokController::class,'login']);
Route::put('/felhasznalok/{id}',[FelhasznalokController::class,'update']);
Route::delete('/felhasznalok/{id}',[FelhasznalokController::class,'delete']);
Route::get('/felhasznalok/{id}',[FelhasznalokController::class,'getById']);

Route::get('/hirdetesek',[HirdetesController::class,'index']);
Route::post('/hirdetesek',[HirdetesController::class,'store']);;
Route::put('/hirdetesek/{id}',[HirdetesController::class,'update']);
Route::delete('/hirdetesek/{id}',[HirdetesController::class,'delete']);
Route::get('/hirdetesek/{id}',[HirdetesController::class,'getById']);
Route::get('/hirdetesek/dragabb/{brutto_egysegar}',[HirdetesController::class,'getMoreExpensive']);
Route::get('/hirdetesek/olcsobb/{brutto_egysegar}',[HirdetesController::class,'getCheaper']);

Route::get('/termekek',[TermekekController::class,'index']);
Route::post('/termekek',[TermekekController::class, 'store']);
Route::put('/termekek/{id}',[TermekekController::class,'update']);
Route::delete('/termekek/{id}',[TermekekController::class,'delete']);
Route::get('/termekek/{id}',[TermekekController::class,'getById']);

Route::get('/rendelesek',[RendelesController::class,'index']);
Route::post('/rendelesek',[RendelesController::class, 'store']);
Route::get('/rendelesek/{id}',[RendelesController::class,'getById']);
Route::delete('/rendelesek/{id}',[RendelesController::class,'delete']);






