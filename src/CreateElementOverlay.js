import Modal from "./Modal"
import { useState } from 'react'
import './createElementOverlay.css'
import { db } from './firebase'
import { Timestamp, collection, addDoc } from 'firebase/firestore'

function createElementOverlay({ onClose, open }) {

	return (
		<div className="create_overlay modal">
			<div className="modal_inner">
				<div className="modal_close">X</div>
				<div className="modal_header">
					<h3 className="modal_title">🍀 Create new element</h3>
					<p className="modal_subtitle">Subtitle dann hier</p>
				</div>
				<div className="modal_body">
					<div className="create_switch_container">
						<div className="option option_task active">
							<div className="option_inner">
								<img src={require('./assets/icons/sidebar/task.svg').default} />
							</div>
							<div className="option_label">Task</div>
						</div>
						<div className="option option_block">
						<div className="option_inner">
								<img src={require('./assets/icons/sidebar/block.svg').default} />
							</div>
							<div className="option_label">Block</div>
						</div>
						<div className="option option_project">
						<div className="option_inner">
								<img src={require('./assets/icons/sidebar/project.svg').default} />
							</div>
							<div className="option_label">Project</div>
						</div>
					</div>
				</div>
				<div className="modal_footer">
					<div className="button_bar">
						<button type="button" className="btn">Next</button>
					</div>

				</div>
			</div>
		</div>
	)
}

export default createElementOverlay
