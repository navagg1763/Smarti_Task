<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ArticleController;

// Route::prefix('article')->group(function () {
//     Route::get('/',[ ArticleController::class, 'getAll']);
//     Route::post('/',[ ArticleController::class, 'create']);
//     Route::delete('/{id}',[ ArticleController::class, 'delete']);
//     Route::get('/{id}',[ ArticleController::class, 'get']);
//     Route::put('/{id}',[ ArticleController::class, 'update']);
// });
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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
