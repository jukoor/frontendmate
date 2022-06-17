import './sidebar.css';

function Sidebar() {

	return (
		<aside className='sidebar'>
			<div className="sidebar_header">
				<h2 className="sidebar_title">Frontend Mate</h2>
			</div>
			<div className="sidebar_menu">
				<ul className="menu_list">
					<li className="menu_list_item">
						<span className="list_item_icon"><img src="assets/icons/sidebar/target.svg" /></span>
						<span className="list_item_title">Projects</span>
					</li>
					<li className="menu_list_item">
						<span className="list_item_icon"><img src="assets/icons/sidebar/tasks.svg" /></span>
						<span className="list_item_title">Tasks</span>
					</li>
					<li className="menu_list_item">
						<span className="list_item_icon"><img src="assets/icons/sidebar/settings.svg" /></span>
						<span className="list_item_title">Settings</span>
					</li>
				</ul>
			</div>

		</aside>
	)
}

export default Sidebar
