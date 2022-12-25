<?php

use App\Http\Controllers\Auth\UserController;
use App\Http\Controllers\TestController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get("/test",[TestController::class,'index']);

Route::prefix('/user')->group(function() {
    Route::get("/index",[UserController::class,'index'])->name("user.index");
    Route::get("/store",[UserController::class,'store'])->name("name.store");
    Route::post("/store",[UserController::class,'store'])->name("name.store");
});
