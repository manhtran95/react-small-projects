
export function Task({ id, task }) {
    console.log(task)
    return <div className="grid grid-cols-10 my-4">
        <div className="col-span-9">{task}</div>
        <div>
            <button className="float-right text-stone-700 hover:text-stone-900">Clear</button>
        </div>
    </div>
}