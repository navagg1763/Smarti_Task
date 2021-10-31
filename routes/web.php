<?php

use Illuminate\Support\Facades\Route;


use App\Http\Controllers\ArticleController;

header('Access-Control-Allow-Origin: *');  
header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');
header("Access-Control-Allow-Headers: *");
 Route::prefix('article')->group(function () {
    Route::get('/',[ ArticleController::class, 'getAll']);
    Route::get('/{search}',[ ArticleController::class, 'search']);
    Route::post('/',[ ArticleController::class, 'create']);
    Route::delete('/{id}',[ ArticleController::class, 'delete']);
    Route::get('/get/{id}',[ ArticleController::class, 'get']);
    Route::put('/{id}',[ ArticleController::class, 'update']);
});

