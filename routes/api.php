<?php

use App\Http\Controllers\Api\TaskApiController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');


Route::post('/save-task', [TaskApiController::class, 'saveTask']);


Route::get('/display-task', [TaskApiController::class, 'displayTask']);


Route::put('/mark-as-done/{id}', [TaskApiController::class, 'markAsDone']);

Route::delete('/delete-task/{id}', [TaskApiController::class, 'deleteTask']);


Route::delete('/delete-all-task', [TaskApiController::class, 'deleteAllTasks']);