import './dashboard.css';
import ProjectCard from "./ProjectCard";
import DashboardTile from "./DashboardTile";
import Header from "./Header"
import { useState, useEffect } from 'react';
import { collection, query, orderBy, where, limit, onSnapshot } from "firebase/firestore";
import { db } from './firebase';

const tileData = [
	{
		"id": 0,
		"title": "Tasks In Progress",
		"number": 0
	},
	{
		"id": 1,
		"title": "Tasks New",
		"number": 0
	},
	{
		"id": 2,
		"title": "Projects Open",
		"number": 0
	}
]

function Dashboard() {

	const [projects, setProjects] = useState([]);
	const [projectsOpen, setProjectsOpen] = useState([]);
	const [recentProjects, setRecentProjects] = useState([]);
	const [recentTasks, setRecentTasks] = useState([]);
	const [tasksInProgress, setTasksInProgress] = useState([]);
	const [tasksNew, setTasksNew] = useState([]);

	/* function to get all tasks from firestore in realtime */
	useEffect(() => {
		const projectsRef = collection(db, 'projects');
		const tasksRef = collection(db, 'tasks');

		const openProjectsQ = query(projectsRef, where("completed", "==", false));
		const allProjectsQ = query(projectsRef);
		const recentProjectsQ = query(projectsRef, orderBy("lastUpdated", "desc"), limit(3));
		const recentTasksQ = query(tasksRef, orderBy("lastEdited", "desc"), limit(3));

		const tasksInProgressQ = query(tasksRef, where("completed", "==", false));
		const tasksNewQ = query(tasksRef, where("status", "==", "new"));

		onSnapshot(allProjectsQ, (querySnapshot) => {
			setProjects(querySnapshot.docs.map(doc => ({
				id: doc.id,
				data: doc.data()
			})));
		});
		onSnapshot(openProjectsQ, (querySnapshot) => {
			setProjectsOpen(querySnapshot.docs.map(doc => ({
				id: doc.id,
				data: doc.data()
			})));
		});
		onSnapshot(tasksInProgressQ, (querySnapshot) => {
			setTasksInProgress(querySnapshot.docs.map(doc => ({
				id: doc.id,
				data: doc.data()
			})));
		});
		onSnapshot(tasksNewQ, (querySnapshot) => {
			setTasksNew(querySnapshot.docs.map(doc => ({
				id: doc.id,
				data: doc.data()
			})));
		});
		onSnapshot(recentProjectsQ, (querySnapshot) => {
			setRecentProjects(querySnapshot.docs.map(doc => ({
				id: doc.id,
				data: doc.data()
			})));
		});

		onSnapshot(recentTasksQ, (querySnapshot) => {
			setRecentTasks(querySnapshot.docs.map(doc => ({
				id: doc.id,
				data: doc.data()
			})));
		});

	}, []);

	tileData[0].number = tasksInProgress.length;
	tileData[1].number = tasksNew.length;
	tileData[2].number = projectsOpen.length;

	return (

		<section className='section dashboard'>
			<div className="container">
				<Header headline="Welcome back, Julian 👋" />

				<div className='dashboard_tiles'>
					{tileData.map((tile) => (
						<DashboardTile
							key={tile.id}
							title={tile.title}
							number={tile.number}
						/>
					))}
				</div>

				<div className="recent_tasks_and_projects hide">

					<div className="recent_tasks recent_col">
						<h2 className="headline">Recent Tasks</h2>
						<div className="inner">
							{recentTasks.map((task) => (
								<div key={task.id} className="recent_item">
									<div className="title">{task.data.title}</div>
								</div>
							))}
						</div>
						<div className="cta">
							<button type="button" className="btn btn_add_task">
								<img className="circle_icon" src="/assets/icons/plus.svg" />
								<span className="label">Add Task</span></button>
						</div>
					</div>

					<div className="recent_projects recent_col">
						<h2 className="headline">Recent Projects</h2>
						<div className="inner">
							{recentProjects.map((project) => (
								<div key={project.id} className="recent_item">
									<div className="title">{project.data.title}</div>
								</div>
							))}
						</div>
					</div>

				</div>

				
			</div>
		</section>
	)
}

export default Dashboard
