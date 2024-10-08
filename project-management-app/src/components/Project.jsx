import { useState, useRef } from "react"
import { v4 as uuid } from "uuid";
import { Task } from "./Task";

export default function Project({ id, title, description, dueDate, onDelete, onAddTask, tasks }) {
    // const [tasks, setTasks] = useState([
    //     {
    //         id: 1,
    //         content: 'Be happy today. Be happy today.Be happy today.Be happy today.Be happy today.Be happy today.Be happy today.Be happy today.Be happy today.'
    //     }
    // ])
    const taskInput = useRef()

    function handleAddTask(content) {
        onAddTask(id, content);
        // setTasks(prevTasks => {
        //     return [...prevTasks,
        //     {
        //         id: uuid(),
        //         content: content
        //     }]
        // })
    }

    console.log(tasks)

    return <div className="w-5/6">
        <div id="project-info" className="mb-8">
            <span className="float-right text-stone-700 hover:text-stone-900"><button onClick={() => onDelete(id)}>Delete</button></span>
            <h1 className="text-3xl font-bold text-stone-600 mb-2">{title}</h1>
            <p className="text-stone-600 mb-4">{dueDate.toDateString()}</p>
            <h1 className="text-stone-800">{description}</h1>
        </div>
        {/* <br></br> */}
        <div id="project-tasks">
            <h1 className="text-2xl font-bold text-stone-600 mb-2">Tasks</h1>
            {/* add task */}
            <span>
                <input ref={taskInput} type="text" className="mr-6 w-1/2 bg-stone-300 py-1" /><button onClick={() => handleAddTask(taskInput.current.value)} className="text-stone-600 hover:text-stone-800">Add Task</button>
            </span>
            {/* task list */}
            <ul className="px-4 py-4 my-8 bg-stone-100">
                {tasks.map((task, idx) => {
                    return <li key={idx}>
                        <Task id={idx} task={task} />
                    </li>
                })}
            </ul>
        </div>
    </div>
}