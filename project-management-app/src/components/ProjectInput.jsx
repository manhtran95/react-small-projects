import { useRef } from 'react'

export default function ProjectInput({ onCancel, createProject }) {
    const title = useRef()
    const description = useRef()
    const dueDate = useRef()

    function handleCreateProject() {
        createProject(title.current.value, description.current.value, dueDate.current.value)
    }

    const inputClass = "w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"

    return <div className="w-5/6">
        <span className="flex justify-end">
            <button className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-200 text-stone-800 hover:bg-stone-300 hover:text-stone-700" onClick={onCancel}>Cancel</button>
            <button className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100" onClick={handleCreateProject}>Save</button>
        </span>
        <h1>TITLE</h1>
        <input className={inputClass} ref={title} type=" text" />
        <h1>DESCRIPTION</h1>
        <input ref={description} type="text" className={inputClass} />
        <h1>DUE DATE</h1>
        <input ref={dueDate} type="date" className={inputClass} />
    </div>
}