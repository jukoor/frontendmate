import './App.css';
import Sidebar from './Sidebar'
import Dashboard from './Dashboard'
import Projects from './Projects'
import TaskManager from './TaskManager'
import Settings from './Settings'
import CreateElementOverlay from './CreateElementOverlay';
import { Route, Routes } from "react-router-dom";


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

	return (
		<div className='app'>
		<Sidebar />

		<Routes>
			{routes.map(({ path, main }) => (
				<Route key={path} path={path} element={main()} />
			))}
		</Routes>
		<CreateElementOverlay />
		</div>
	);
}

export default App;
