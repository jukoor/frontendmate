import './project.css';
import { useState } from 'react'


function Project({ id, title, description }) {
	{ document.title = "Projects" }
	return (

		<div className="project">
			<div className='project_body'>
				<div className="title_and_icon">
					<div className="circle">
						<img className="circle_icon" src="/assets/icons/projects/cloud.svg" maxwidth="50" />
					</div>
					<h2 className="title">{title}</h2>
				</div>
				<p className="description">{description}</p>
				<div className="progress_outer">
					<div className="progress_number">50%</div>
					<div className="progress_bg">
						<div className="progress"></div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Project