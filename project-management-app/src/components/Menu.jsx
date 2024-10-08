
export default function Menu({ titles, activeProjectIndex, onClick, openCreateProject }) {
    return <aside id="default-sidebar" className="fixed top-16 left-0 z-40 w-64 h-screen bg-black rounded-tr-lg transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
        <div className="mt-16 ml-8 text-gray-300 w-4/6">
            <h1 className="font-semibold mb-8">YOUR PROJECTS</h1>
            <button className="px-4 py-2 mb-4 rounded-md bg-gray-700 text-gray-200" onClick={openCreateProject}>+ Add Project</button>
            <ul>
                {titles.map((title, idx) =>
                    <li key={idx} className="mb-2"><button className={`rounded-md py-1 w-full text-left ${idx === activeProjectIndex ? "bg-stone-700" : ""}`} onClick={() => onClick(idx)}>{title}</button></li>)}
            </ul>
        </div>
    </aside>
}