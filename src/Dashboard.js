import './dashboard.css';
import Project from "./Project";
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
	const [tasksInProgress, setTasksInProgress] = useState([]);
	const [tasksNew, setTasksNew] = useState([]);

	/* function to get all tasks from firestore in realtime */
	useEffect(() => {
		const projectsRef = collection(db, 'projects');
		const recentProjectsRef = collection(db, 'projects');
		const tasksRef = collection(db, 'tasks');
		const openProjectsQ = query(projectsRef, where("completed", "==", false));
		const allProjectsQ = query(projectsRef);
		const recentProjectsQ = query(recentProjectsRef,orderBy("lastUpdated", "desc"), limit(3));
		
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

		
	}, []);

	tileData[0].number = tasksInProgress.length;
	tileData[1].number = tasksNew.length;
	tileData[2].number = projectsOpen.length;

	console.log(recentProjects);

	return (

		<div className='dashboard'>
			<div className="container">
				<Header />

				<div className='dashboard_tiles'>
					{tileData.map((tile) => (
						<DashboardTile
							key={tile.id}
							title={tile.title}
							number={tile.number}
						/>
					))}
				</div>
				<div className="recent_projects">
					<h2 className="headline">Recent Projects</h2>
					<div className="inner">
						{recentProjects.map((project) => (
							<div className="recent_project">
								<div className="title">{project.data.title}</div>
							</div>
						))}
			
					</div>
				</div>

				<div className="recent_tasks">
					<h2 className="headline">Recent Tasks</h2>
					<div className="recent_task">
						<div className="title">Beispiel Task Name #1</div>
					</div>
					<div className="recent_task">
						<div className="title">Beispiel Task Name #2</div>
					</div>
					<div className="recent_task">
						<div className="title">Beispiel Task Name #2</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Dashboard
