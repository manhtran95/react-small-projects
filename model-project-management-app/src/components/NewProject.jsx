import Input from "./Input"
import { useRef } from 'react'

export default function NewProject({ onAdd }) {
    const title = useRef()
    const description = useRef()
    const dueDate = useRef()

    function handleSave() {
        onAdd({
            title: title.current.value,
            description: description.current.value,
            dueDate: dueDate.current.value,
        })
    }

    return <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
            <li><button className="text-stone-800 hover:text-stone-950">Cancel</button></li>
            <li><button onClick={handleSave} className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950">Save</button></li>
        </menu>
        <div>
            <Input ref={title} label="Title" type="text" />
            <Input ref={description} label="Description" textarea />
            <Input ref={dueDate} label="Due Date" type="date" />
        </div>
    </div>
}