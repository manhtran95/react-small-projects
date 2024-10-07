import { useState } from 'react'
import ProjectInput from './components/ProjectInput';

function App() {
  const [showDefault, setShowDefault] = useState(true)

  function openCreateProject() {
    setShowDefault(false)
  }

  function createProject(title, description, dueDate) {
    console.log(title, description, dueDate)
    console.log(typeof (dueDate))
  }

  function cancelCreateProject() {
    setShowDefault(true)
  }

  return (
    <>
      <aside id="default-sidebar" class="fixed top-16 left-0 z-40 w-64 h-screen bg-black rounded-tr-lg transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
        <div class="mt-16 ml-8 text-gray-300">
          <h1 class="font-semibold">YOUR PROJECTS</h1>
        </div>
      </aside>
      <div class="grid grid-cols-4 gap-4 place-content-center content-center mt-32">
        <div></div>
        <div></div>
        {showDefault &&
          <div>
            <img src="logo.png" alt="" class="w-16 h-16" />
            <h3>No Project Selected</h3>
            <p>Select a project or start with a new one</p>
            <button class="bg-gray-700 text-gray-200" onClick={openCreateProject}>Create new project</button>
          </div>
        }
        {!showDefault && <ProjectInput createProject={createProject} onCancel={cancelCreateProject} />}
        <div></div>
      </div>
    </>
  );
}

export default App;
