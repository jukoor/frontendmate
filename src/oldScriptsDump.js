<div className="create_overlay modal">
			<div className="modal_inner">
				<div className="modal_close" onClick={closeModal}></div>
				<div className="modal_header">
					<h3 className="modal_title">🍀 Create new element</h3>
					<p className="modal_subtitle">Subtitle dann hier</p>
				</div>
				<div className="modal_body">
					<div className="create_switch_container hide">
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

					<div className="create_task_form">
						<div className="task_form_inner">
							<form className="task_form form" name="create_task_form" onSubmit={handleSubmit}>
								<div className="form_elem_container form_elem_input">
									<label for='task_title' className="label">Title</label>
									<input 
									    className='form_elem' 
										type='text' 
										name='task_title' />
								</div>
								<div className="form_elem_container form_elem_textarea">
									<label for='task_title' className="label">Description</label>
									<textarea 
										className='form_elem' 
										name='task_description' />
								</div>
								<div className="form_elem_container form_elem_select2">
									<label for='task_title' className="label">Project</label>
									<select className='form_elem' name='task_project' >
										<option>Projekt 1</option>
										<option>Projekt 2</option>
										<option>Projekt 3</option>
									</select>
								</div>
							</form>
						</div>
					</div>
				</div>
				<div className="modal_footer">
					<div className="button_bar">
						<button type="button" className="btn btn_secondary" onClick={closeModal}>Cancel</button>
						<button type="button" className="btn">Next</button>
					</div>

				</div>
			</div>
		</div>