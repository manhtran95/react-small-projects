import ProjectsSidebar from "./components/ProjectsSidebar";
import NewProject from "./components/NewProject";
import { SelectedProject } from "./components/SelectedProject";
import NoProjectSelected from "./components/NoProjectSelected";
import { useState } from "react";

function App() {
	const [projectsState, setProjectsState] = useState({
		// undefined: initial, null: newProject, id: projectId
		selectedProjectId: undefined,
		projects: [],
		tasks: [],
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
				...prevState,
				selectedProjectId: undefined,
				projects: [...prevState.projects,
				{
					...projectData,
					id: Math.random()
				}]
			}
		})
	}

	function handleDeleletProject() {
		setProjectsState(prevState => {
			return {
				...prevState,
				selectedProjectId: undefined,
				projects: prevState.projects.filter(p => p.id !== prevState.selectedProjectId)
			}
		})
	}

	function handleAddTask(text) {
		setProjectsState((prevState) => {
			const taskId = Math.random()
			const newTask = {
				text: text,
				projectId: prevState.selectedProjectId,
				id: taskId,
			}
			return {
				...prevState,
				tasks: [newTask, ...prevState.tasks]
			}
		})
	}

	function handleDeleteTask(id) {
		setProjectsState(prevState => {
			return {
				...prevState,
				tasks: prevState.tasks.filter(task => task.id !== id)
			}
		})
	}

	let content;

	if (projectsState.selectedProjectId === null) {
		content = <NewProject onAdd={handleAddProject} onCancelAdd={handleCancelAddProject} />
	} else if (projectsState.selectedProjectId === undefined) {
		content = <NoProjectSelected onStartAddProject={handleStartAddProject} />
	} else {
		content = <SelectedProject project={projectsState.projects.find(p => p.id === projectsState.selectedProjectId)} onDelete={handleDeleletProject} onAddTask={handleAddTask} onDeleteTask={handleDeleteTask} tasks={projectsState.tasks.filter(task => task.projectId === projectsState.selectedProjectId)} />
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
