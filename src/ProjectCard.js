import './projectCard.css';
import { useState, useEffect } from 'react';
import { collection, query, orderBy, where, onSnapshot } from "firebase/firestore";
import { db } from './firebase';


function ProjectCard({ id, title, description, openTasksCount }) {
	document.title = "Projects"

	const [allProjectTasksCount, setAllProjectTasksCount] = useState([]);
	const [openProjectTaskCount, setOpenProjectTaskCount] = useState([]);

	let tasksOpenPercentage;
	
	useEffect(() => {
		const qCountAllProjectTasks = query(collection(db, 'tasks'), where("projectId", "==", id));
		const qCountOpenProjectTasks = query(collection(db, 'tasks'), where("projectId", "==", id), where("completed", "==", true));
		
		onSnapshot(qCountOpenProjectTasks, (querySnapshot) => {
			setOpenProjectTaskCount(querySnapshot.docs.map(doc => ({
				id: doc.id,
				data: doc.data()
			})));
		});

		onSnapshot(qCountAllProjectTasks, (querySnapshot) => {
			setAllProjectTasksCount(querySnapshot.docs.map(doc => ({
				id: doc.id,
				data: doc.data()
			})));
		});

	}, []);

	if(allProjectTasksCount.length == 0) {
		 tasksOpenPercentage = 0;
	} else {
		tasksOpenPercentage = Math.round(((openProjectTaskCount.length/allProjectTasksCount.length) * 100),2);
	}
	

	return (

		<div className="project">
			<div className='project_body'>
				<div className="title_and_icon">
					<div className="circle">
						<img className="circle_icon" src={require('./assets/icons/projects/cloud.svg').default} maxwidth="50" />
					</div>
					<h2 className="title">{title}</h2>
				</div>
				<p className="description">{description}</p>

				<div className="progress_outer">
					<div className="progress_info">
						<span className="percent">{tasksOpenPercentage}%</span>
						<span className='open_tasks'>{openProjectTaskCount.length} {openProjectTaskCount.length === 1 ? 'task' : 'tasks'}</span>
					</div>
					<div className="progress_bg">
						<div className="progress" style={{width: `${tasksOpenPercentage}%`}}></div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ProjectCard