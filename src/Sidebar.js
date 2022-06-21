import './sidebar.css';
import { Route, Routes, NavLink } from "react-router-dom";

const routeLinks = [{
	id: 0,
	title: 'Dashboard',
	icon: 'dashboard',
	target: '/'
}, {
	id: 1,
	title: 'Projects',
	icon: 'target',
	target: '/projects'
}, {
	id: 2,
	title: 'Tasks',
	icon: 'tasks',
	target: '/tasks'
}, {
	id: 3,
	title: 'Settings',
	icon: 'settings',
	target: '/settings'
}]

function Sidebar() {

	return (
		<aside className='sidebar'>
			<div className="sidebar_header">
				<h2 className="sidebar_title">Frontend Mate</h2>

			</div>
			<div className="sidebar_menu">
				<ul className="menu_list">

				{routeLinks.map(({id, title, icon, target}) => (
					<li className="menu_list_item" key={id}>
					<NavLink className={({ isActive }) => (isActive ? 'menu_link active' : 'menu_link inactive')} to={target}>
						<span className="list_item_icon"><img src={`assets/icons/sidebar/${icon}.svg`} /></span>
						<span className="list_item_title">{title}</span>
					</NavLink>
					</li>
				))}

				</ul>
			</div>

		</aside>
	)
}

export default Sidebar
