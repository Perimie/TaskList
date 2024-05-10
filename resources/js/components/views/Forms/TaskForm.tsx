import * as React from 'react'
import apiServices from '../../services/apiServices';


const TaskForm = () =>{

    const [title, setTitle] = React.useState('');
    const [description, setDescription] = React.useState('');


    const handleSubmit = () => {
        apiServices.post("api/save-task" ,{
            title: title,
            description : description,

        })
        .then(() => {
           setTitle("");
           setDescription("");
        });
    };
    return (
        <div className='flex flex-col gap-3'>
            <input 
            type="text" 
            placeholder="Title" 
            className="input input-bordered w-full"
            value={title}
            onChange={(event)=> {
                setTitle(event.target.value)
            }}/>
            <textarea
             className="textarea textarea-bordered min-h-52"
             placeholder="Description"
             value={description}
             onChange={(event)=> {
                setDescription(event.target.value)
            }}
             ></textarea>
            <button className="btn btn-accent"
            onClick ={handleSubmit}>Save Task</button>
        </div>
        
    )
};


export default TaskForm;