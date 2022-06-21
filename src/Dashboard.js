import './dashboard.css';
import Project from "./Project";
import Header from "./Header"
import { useState, useEffect } from 'react';
import { collection, query, orderBy, where, onSnapshot } from "firebase/firestore";
import { db } from './firebase';

function Dashboard() {

	const [projects, setProjects] = useState([]);

	/* function to get all tasks from firestore in realtime */
	useEffect(() => {
		const projectsRef = collection(db, 'projects');
		const q = query(projectsRef, where("completed", "==", true));
		onSnapshot(q, (querySnapshot) => {

			setProjects(querySnapshot.docs.map(doc => ({
				id: doc.id,
				data: doc.data()
			})));

		});
	}, []);
	console.log(projects);
	return (

		<div className='dashboard'>
		<Header/>
		{projects.length}
			<div className='projects'>
					{projects.map((project) => (
						<Project
							id={project.id}
							key={project.id}
							title={project.data.title}
							description={project.data.description}
						/>
					))}
			</div>

		</div>
	)
}

export default Dashboard
