import * as React from 'react'
import apiServices from '../services/apiServices';


interface TaskData{
    title: string;
    description: string;
    id:number;
    completed: 0 | 1;
    created_at: string;
    updated_at: string;
}


interface TaskContextTypes{
    taskList: TaskData[];
    updateContext: () => void;
}

const TaskContext = React.createContext<TaskContextTypes | undefined>(undefined);

export const TaskProvider: React.FC = ({children}) => {

    const [taskList,setTaskList] = React.useState<TaskData[]>([]);

    const fetchTask = () =>{
        apiServices.get<{data: TaskData[] }>("api/display-task").then((response) => {
            console.log (response);
            setTaskList(response.data.data);
        })
        .catch((error) => {
            console.log(error);
        });
    };
    

    React.useEffect(() =>{
        fetchTask();
    },[]);

    const updateContextData = () =>{
        fetchTask();
    }    
    return (
        <TaskContext.Provider value={{taskList,updateContextData}}>{children}</TaskContext.Provider>
    );
};


export const useTaskContext = () =>{
    const context = React.useContext(TaskContext);

    if( !context ){
        throw new Error('useTaskContext must be used within a TaskProvider')
    }

    return context;
}

