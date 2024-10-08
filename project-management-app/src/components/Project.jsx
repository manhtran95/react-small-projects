
export default function Project({ title, description, dueDate }) {
    return <>
        <h1 className="text-3xl font-bold text-stone-600 mb-2">{title}</h1>
        <h1>{description}</h1>
        <h1>{dueDate.toDateString()}</h1>
    </>
}