import Modal from "./ModalOld"
import { useState } from 'react'
import './createElementOverlay.css'
import { db } from './firebase'
import { Timestamp, collection, addDoc } from 'firebase/firestore'

function createElementOverlay({ isOpen, closeModal }) {

	const handleSubmit = async (e) => {

	}
	if (isOpen) {
		return (
			<div className="create_elements_overlay">
				<div className="overlay_titlebar">
					<div className="left_col">
						<div className="overlay_close"></div>
						<div className="overlay_title">Create Task, Block or Project</div>
					</div>
					<div className="right_col">
						<button type="button" className="btn btn_secondary">Cancel</button>
						<button type="button" className="btn">Next</button>
					</div>
				</div>
				<div className="overlay_body">
					<div className="inner">
						<div className="create_switch_container">
							<div className="option option_task active">
								<label className="option_label">
									<input className="option_input" type="radio" name="radio" defaultChecked />
									<span className="option_label_inner">
										<img className="option_icon" src={require('./assets/icons/sidebar/task.svg').default} />
										<span className="option_title">Task</span>
										<span className="option_description">Create a new Task or multiple after each other.</span>
									</span>
								</label>
							</div>
							<div className="option option_task active">
								<label className="option_label">
									<input className="option_input" type="radio" name="radio" />
									<span className="option_label_inner">
										<img className="option_icon" src={require('./assets/icons/sidebar/block.svg').default} />
										<span className="option_title">Block</span>
										<span className="option_description">Create a block of tasks either on your own or from predefined templates.</span>
									</span>
								</label>
							</div>
							<div className="option option_task active">
								<label className="option_label">
									<input className="option_input" type="radio" name="radio" />
									<span className="option_label_inner">
										<img className="option_icon" src={require('./assets/icons/sidebar/project.svg').default} />
										<span className="option_title">Project</span>
										<span className="option_description">Create a new Project to hold blocks and tasks.</span>
									</span>
								</label>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	} else {
		return;
	}
}

export default createElementOverlay
