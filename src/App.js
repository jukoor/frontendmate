import './App.css';
import Sidebar from './Sidebar'
import Dashboard from './Dashboard'
import Projects from './Projects'
import TaskManager from './TaskManager'
import Settings from './Settings'
import CreateElementOverlay from './CreateElementOverlay';
import { Route, Routes } from "react-router-dom";
import { useState } from 'react'

const routes = [
	{
		path: "/",
		main: () => <Dashboard />
	},{
		path: "/projects",
		main: () => <Projects />
	},
	{
		path: "/tasks",
		main: () => <TaskManager />
	},
	{
		path: "/settings",
		main: () => <Settings />
	}
];
function App() {

	function handleCreateClick() {
		setCreateModalIsOpen(!createModalIsOpen);
	}

	function handleCloseModal() {
		setCreateModalIsOpen(false);
	}

	const [createModalIsOpen, setCreateModalIsOpen] = useState(false);

	return (
		<div className='app'>
		<Sidebar onCreateClick={handleCreateClick} />

		<Routes>
			{routes.map(({ path, main }) => (
				<Route key={path} path={path} element={main()} />
			))}
		</Routes>
		{createModalIsOpen && <CreateElementOverlay isOpen={createModalIsOpen} closeModal={handleCloseModal} />}
		</div>
	);
}

export default App;
