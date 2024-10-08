
export default function Project({ id, title, description, dueDate, onDelete }) {
    return <div className="w-5/6">
        <div id="info">
            <span className="float-right text-stone-600 hover:text-stone-800"><button onClick={() => onDelete(id)}>Delete</button></span>
            <h1 className="text-3xl font-bold text-stone-600 mb-2">{title}</h1>
            <p className="text-stone-600 mb-4">{dueDate.toDateString()}</p>
            <h1 className="text-stone-800">{description}</h1>
        </div>
    </div>
}