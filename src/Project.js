import './project.css';
import { useState } from 'react'

function Project({ id, title, description }) {

	return (
		<div className="project">
			<div className='project_body'>
				<h2><strong>Title:</strong> {title}</h2>
				<p><strong>Description:</strong> {description}</p>
			</div>
		</div>
	)
}

export default Project