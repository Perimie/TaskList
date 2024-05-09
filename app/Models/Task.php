<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Task extends Model
{
    use HasFactory;

    protected $guarded = ['id', 'completed'];


    protected $fillable = [
        'title',
        'description',
    ];

    public function createTask($task){
        return $this->create($task);
    }
}
