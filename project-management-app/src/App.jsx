import { useState } from 'react'
import { v4 as uuid } from "uuid";

import Menu from './components/Menu'
import ProjectInput from './components/ProjectInput';
import Project from './components/Project';

const MODE = {
    DEFAULT: 'default',
    CREATE: 'create',
    DETAIL: 'detail',
}

function App() {
    const [mode, setMode] = useState(MODE.DEFAULT)
    // const [mode, setMode] = useState(MODE.DETAIL)
    const [projects, setProjects] = useState([{
        id: 1,
        title: 'Learning React',
        description: 'test1',
        dueDate: new Date('2024-10-17')
    },
    {
        id: 2,
        title: 'Mastering React',
        description: 'test2',
        dueDate: new Date('2024-10-18')
    }])
    const [activeProjectIndex, setActiveProjectIndex] = useState(null)

    // mode default
    function setModeDefault() {
        setMode(MODE.DEFAULT)
        setActiveProjectIndex(null)
    }
    // mode detail
    function selectProject(index) {
        setMode(MODE.DETAIL)
        setActiveProjectIndex(index)
    }

    // mode create
    function openCreateProject() {
        setMode(MODE.CREATE)
        setActiveProjectIndex(null)
    }
    function cancelCreateProject() {
        setModeDefault()
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
    function handleDeleteProject(id) {
        setProjects(prevProjects => {
            return prevProjects.filter(p => p.id != id);
        })
        setModeDefault()
    }

    return (
        <>
            <Menu titles={projects.map(p => p.title)} activeProjectIndex={activeProjectIndex} onClick={selectProject} openCreateProject={openCreateProject} />
            <div className="grid grid-cols-4 gap-4 place-content-center content-center mt-32">
                <div></div>
                <div className=' col-span-3'>
                    {(mode === MODE.DEFAULT) &&
                        <div className='grid justify-center'>
                            <img src="logo.png" alt="" className="w-16 h-16" />
                            <h3>No Project Selected</h3>
                            <p>Select a project or start with a new one</p>
                            <button className="px-6 py-2 rounded-md bg-gray-700 text-gray-200" onClick={openCreateProject}>Create new project</button>
                        </div>
                    }
                    {(mode === MODE.CREATE) && <ProjectInput createProject={createProject} onCancel={cancelCreateProject} />}
                    {(mode === MODE.DETAIL) && <Project {...projects[activeProjectIndex]} onDelete={handleDeleteProject} />}
                </div>
            </div>
        </>
    );
}

export default App;
