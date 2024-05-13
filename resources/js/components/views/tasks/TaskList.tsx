import React from 'react'
import { useTaskContext } from '../../context/TaskContext';
import { truncateText } from '../../utils/string';
import apiServices from '../../services/apiServices';

const TaskList = () => {

    const {taskList , updateContextData} = useTaskContext();

    const renderList = (task) =>{
        const {title,id, description} = task;
        return(
                <div className="rounded-xl bg-base-100/60 p-6" key={id}>
                    <div className="flex justify-between">
                        <div>
                            <div className="text-xl">{title}</div>
                            <div className="text-sm">{truncateText(description)}</div>
                        </div>
                        <div>
                            <ul className="menu menu-horizontal bg-base-200/40 menu-xs rounded-lg p-2">
                                <li>
                                    <div className="tooltip tooltip-info" data-tip="Mark As Done">
                                        <svg onClick={() => markAsDone(id)} className="stroke-current" width={25} height={25} fill="none"  strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                                        <path d="M22 4 12 14.01l-3-3" />
                                        </svg>
                                    </div>
                                </li>
                                <li>
                                    <div className="tooltip tooltip-warning" data-tip="Delete Task">
                                        <svg onClick={() => deleteTask(id)} width={25} height={25} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3 6h18" />
                                        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                                        <path d="M10 11v6" />
                                        <path d="M14 11v6" />
                                        </svg>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
        );
    };

    const markAsDone = (id) =>{

        apiServices.put("api/mark-as-done/" + id).then(()=>{
            updateContextData();
        }).catch((error)=>{
            console.log(error);
        });

    };

    const deleteTask = (id) =>{

        apiServices.delete("api/delete-task/" + id).then(()=>{
            updateContextData();
        }).catch((error)=>{
            console.log(error);
        });

    };

    const deleteAllTask = () =>{
        apiServices.delete("api/delete-all-task").then(()=>{
            updateContextData();
        }).catch((error)=>{
            console.log(error);
        });
    }

    return (
    <div className="card bg-slate-600/50">
        <div className="card-body">
            <h2 className="card-title text-gray-300 text-3xl ">Your Tasks</h2>
            <p className="text-gray-300/60 text-sm">You can do it</p>
            <div className ="flex flex-col gap-3 mt-5 max-h-[20rem] overflow-y-auto px-5">
                {taskList.map(renderList)}
            </div>
            <button onClick={deleteAllTask} className="btn btn-error ">Delete all Tasks</button>
        </div>
    </div>

    )
};

export default TaskList;