import React from 'react'


const TaskForm = () =>{

    const handleSubmit = () => {
        
    }
    return (
        <div className='flex flex-col gap-3'>
            <input type="text" placeholder="Type here" className="input input-bordered w-full " />
            <textarea className="textarea textarea-bordered min-h-52" placeholder="Description"></textarea>
            <button className="btn btn-accent" onclick={handleSubmit}>Save Task</button>
        </div>
        
    )
};


export default TaskForm;