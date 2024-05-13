<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\Task;

class TaskApiController extends Controller
{
    protected $taskModel;


     public function __construct(){
        $this->taskModel = new Task();
    }
    public function saveTask(Request $request){

        $validator = Validator::make($request->all(),[
            'title' => 'required|string|max:25',
            'description' => 'required|string'
        ]);

        if ($validator->fails()){
            return response()->json(['error', $validator->errors()],422);
        }

        $this->taskModel->createTask([
            'title' => $request->title,
            'description' => $request->description,
        ]);

        return response()->json([
            'message' => 'Task Added'
        ]);

    }

    public function displayTask(){
        return response()->json(['data' => $this->taskModel->getTask()],200);
    }


    public function markAsDone($taskId){
        $isUpdated = $this->taskModel->markAsDone($taskId);
        if ($isUpdated){
            return response()->json(['message' => 'Task marked as done'],200);
        }

        return response()->json([
            'error' =>'Failed to update'
        ],422);
    }


    public function deleteTask($taskId){
        $isDeleted = $this->taskModel->deleteTask($taskId);

        if ($isDeleted){
            return response()->json(['message' => 'Task is deleted'],200);
        }

        return response()->json([
            'error' =>'Failed to delete'
        ],422);
    }

    public function deleteAllTasks()
    {   
        $deleted = $this->taskModel::deleteAllTasks();

        if ($deleted) {
            return response()->json(['message' => 'All tasks are deleted'], 200);
        }

        return response()->json(['error' => 'Failed to delete tasks'], 422);
    }
}
