import { useRef } from 'react'

export default function ProjectInput({ onCancel, createProject }) {
    const title = useRef()
    const description = useRef()
    const dueDate = useRef()

    function handleCreateProject() {
        createProject(title.current.value, description.current.value, dueDate.current.value)
    }

    return <div>
        <span class="flex justify-end">
            <button class="mr-4" onClick={onCancel}>Cancel</button>
            <button class="bg-gray-800 text-gray-200" onClick={handleCreateProject}>Save</button>
        </span>
        <h1>TITLE</h1>
        <input ref={title} type="text" />
        <h1>DESCRIPTION</h1>
        <input ref={description} type="text" class="h-12" />
        <h1>DUE DATE</h1>
        <input ref={dueDate} type="date" />
    </div>
}