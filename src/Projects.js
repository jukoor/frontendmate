import './projects.css';
import ProjectCard from "./ProjectCard";
import Header from "./Header"
import { useState, useEffect } from 'react';
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import { db } from './firebase';

function Projects() {

	const [projects, setProjects] = useState([]);

	
	/* function to get all tasks from firestore in realtime */
	useEffect(() => {
		const q = query(collection(db, 'projects'), orderBy('id', 'desc'));
		

		onSnapshot(q, (querySnapshot) => {
			setProjects(querySnapshot.docs.map(doc => ({
				id: doc.id,
				data: doc.data()
			})));
		});

		

	}, []);

	console.log(projects);
	
	return (

		<section className='projects section'>
			<div className="container">
				<Header headline="Your Projects" />

				<div className='projects'>
					{projects.map((project) => (
						<ProjectCard
							id={project.id}
							key={project.id}
							title={project.data.title}
							description={project.data.description}
							openTasksCount={project.data.opentaskscount}
						/>
					))}
				</div>
			</div>
		</section>
	)
}

export default Projects
