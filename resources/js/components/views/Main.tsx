import React from 'react'
import TaskForm from './Forms/TaskForm';
import TaskList from './tasks/TaskList';


const Main = () => {
    return (
        <div className="m-40">
            <div className="flex gap-20 justify-evenly ">
                <div className='w-6/12'>
                    <div className='mb-4'>
                        <div className='text-4xl font-semibold tracking-wider text-gray-300 mb-1'>
                            Hi Jerimie
                        </div>
                        <div className='text-sm tracking-wider leading-5 text-gray-300 font-lighter'>
                            Welcome Back to the workspace make your todo list today!
                        </div>
                    </div>
                    <TaskForm/>
                </div>
                <div className='w-6/12'><TaskList/> </div>
            </div>
        
        </div>
    );
};

export default Main
