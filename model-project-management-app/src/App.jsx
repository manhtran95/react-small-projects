import ProjectsSidebar from "./components/ProjectsSidebar";
import NewProject from "./components/NewProject";
import { SelectedProject } from "./components/SelectedProject";
import NoProjectSelected from "./components/NoProjectSelected";
import { useState } from "react";

function App() {
	const [projectsState, setProjectsState] = useState({
		// undefined: initial, null: newProject, id: projectId
		selectedProjectId: undefined,
		projects: []
	})

	function handleSelectProject(projectId) {
		setProjectsState(prevState => {
			return {
				...prevState,
				selectedProjectId: projectId
			}
		})
	}

	function handleStartAddProject() {
		setProjectsState(prevState => {
			return {
				...prevState,
				selectedProjectId: null
			}
		})
	}

	function handleCancelAddProject() {
		setProjectsState(prevState => {
			return {
				...prevState,
				selectedProjectId: undefined
			}
		})
	}

	function handleAddProject(projectData) {
		setProjectsState(prevState => {
			return {
				selectedProjectId: undefined,
				projects: [...prevState.projects,
				{
					...projectData,
					id: Math.random()
				}]
			}
		})
	}

	let content;

	if (projectsState.selectedProjectId === null) {
		content = <NewProject onAdd={handleAddProject} onCancelAdd={handleCancelAddProject} />
	} else if (projectsState.selectedProjectId === undefined) {
		content = <NoProjectSelected onStartAddProject={handleStartAddProject} />
	} else {
		content = <SelectedProject project={projectsState.projects.find(p => p.id === projectsState.selectedProjectId)} />
	}

	console.log(projectsState)

	return (
		<main className="h-screen my-8 flex gap-8">
			<ProjectsSidebar onStartAddProject={handleStartAddProject} projects={projectsState.projects} onSelectProject={handleSelectProject} selectedProjectId={projectsState.selectedProjectId} />
			{/* <NewProject /> */}
			{content}
		</main>
	);
}

export default App;
