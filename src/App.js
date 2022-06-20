import './App.css';
import Sidebar from './Sidebar'
import Dashboard from './Dashboard'
import TaskManager from './TaskManager'
import Settings from './Settings'
import { Route, Routes } from "react-router-dom";


const routes = [
	{
		path: "/",
		main: () => <Dashboard />
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
		</div>
	);
}

export default App;
