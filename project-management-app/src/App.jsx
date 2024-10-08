import { useState } from 'react'
import ProjectInput from './components/ProjectInput';
import Project from './components/Project';
import { v4 as uuid } from "uuid";

const MODE = {
    DEFAULT: 'default',
    CREATE: 'create',
    DETAIL: 'detail',
}

function App() {
    // const [mode, setMode] = useState(MODE.DEFAULT)
    const [mode, setMode] = useState(MODE.DETAIL)
    const [projects, setProjects] = useState([{
        id: 1,
        title: 'test1',
        description: 'test2',
        dueDate: new Date('2024-10-17')
    }])
    const [activeProjectIndex, setActiveProjectIndex] = useState(0)

    function openCreateProject() {
        setMode(MODE.CREATE)
    }

    function createProject(title, description, dueDate) {
        const newUuid = uuid()
        setProjects(prevProjects => {
            return [...prevProjects,
            {
                id: newUuid,
                title: title,
                description: description,
                dueDate: new Date(dueDate)
            }]
        })
        setMode(MODE.DETAIL)
        setActiveProjectIndex(projects.length)
    }

    function cancelCreateProject() {
        setMode(MODE.DEFAULT)
    }

    console.log(activeProjectIndex)
    console.log(projects[activeProjectIndex])

    return (
        <>
            <aside id="default-sidebar" className="fixed top-16 left-0 z-40 w-64 h-screen bg-black rounded-tr-lg transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
                <div className="mt-16 ml-8 text-gray-300">
                    <h1 className="font-semibold">YOUR PROJECTS</h1>
                </div>
            </aside>
            <div className="grid grid-cols-4 gap-4 place-content-center content-center mt-32">
                <div></div>
                <div className=' col-span-3'>
                    {(mode === MODE.DEFAULT) &&
                        <div className='grid justify-center'>
                            <img src="logo.png" alt="" className="w-16 h-16" />
                            <h3>No Project Selected</h3>
                            <p>Select a project or start with a new one</p>
                            <button className="bg-gray-700 text-gray-200" onClick={openCreateProject}>Create new project</button>
                        </div>
                    }
                    {(mode === MODE.CREATE) && <ProjectInput createProject={createProject} onCancel={cancelCreateProject} />}
                    {(mode === MODE.DETAIL) && <Project {...projects[activeProjectIndex]} />}
                </div>
            </div>
        </>
    );
}

export default App;
