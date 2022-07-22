import './project.css';
import { useState, useEffect } from 'react';
import { collection, query, orderBy, where, onSnapshot } from "firebase/firestore";
import { db } from './firebase';

function Project({ projectId }) {
	document.title = "Projects"

	const [project, setProject] = useState([]);

	let tasksOpenPercentage;
	
	useEffect(() => {
		const qProjects = query(collection(db, 'projects'), where("projectId", "==", projectId));
		
		onSnapshot(qProjects, (querySnapshot) => {
			setProject(querySnapshot.docs.map(doc => ({
				id: doc.id,
				data: doc.data()
			})));
		});

	}, []);


	return (

		<div className="project">
			<div className='project_body'>
				<div className="title_and_icon">
					<h2 className="title">{title}</h2>
				</div>
		
			</div>
		</div>
	)
}

export default Project