import './sidebar.css';
import { Route, Routes, NavLink } from "react-router-dom";
import CreateElementOverlay from './CreateElementOverlay';
import { useRef, useEffect, useState } from 'react'



const routeLinks = [{
	id: 0,
	title: 'Dashboard',
	iconPath: require('./assets/icons/sidebar/dashboard.svg').default,
	target: '/'
}, {
	id: 1,
	title: 'Projects',
	iconPath: require('./assets/icons/sidebar/project.svg').default,
	target: '/projects'
}, {
	id: 2,
	title: 'Tasks',
	iconPath: require('./assets/icons/sidebar/task.svg').default,
	target: '/tasks'
}, {
	id: 3,
	title: 'Settings',
	iconPath: require('./assets/icons/sidebar/settings.svg').default,
	target: '/settings'
}]


function useDocumentTitle(title, prevailOnUnmount = false) {
	const defaultTitle = useRef(document.title);

	useEffect(() => {
		document.title = title;
	}, [title]);

	useEffect(() => () => {
		if (!prevailOnUnmount) {
			document.title = defaultTitle.current;
		}
	}, [])
}





function Sidebar() {

	const [toggleMultiBtn, setToggleMultiBtn] = useState(false);

	const handleMultiBtnClick = event => {
		console.log(toggleMultiBtn);
		setToggleMultiBtn(!toggleMultiBtn);
		console.log(toggleMultiBtn);
	}

	return (
		<aside className='sidebar'>
			<div className="sidebar_header">
				<h2 className="sidebar_title">Frontend Mate</h2>

			</div>
			<div className="sidebar_menu">
				<ul className="menu_list">

					{routeLinks.map((link, index) => (
						<li className="menu_list_item" key={link.id}>
							<NavLink className={({ isActive }) => (isActive ? 'menu_link active' : 'menu_link inactive')} to={link.target}>
								<span className="list_item_icon"><img src={routeLinks[index].iconPath} /></span>
								<span className="list_item_title">{link.title}</span>
							</NavLink>
						</li>
					))}

				</ul>

			</div>

			<div className='create_multi_btn_container'>
				<div className={`menu ${toggleMultiBtn ? 'active' : ''}`}>
					<div className="menu_list">
						<div className="list_item">
							<div className='icon_container'><img className='icon' src={require('./assets/icons/sidebar/task.svg').default} /></div>
							<div className="label">Task</div>
						</div>
						<div className="list_item">
							<div className='icon_container'><img className='icon' src={require('./assets/icons/sidebar/block.svg').default} /></div>
							<div className="label">Block</div>
						</div>
						<div className="list_item">
							<div className='icon_container'><img className='icon' src={require('./assets/icons/sidebar/project.svg').default} /></div>
							<div className="label">Project</div>
						</div>
					</div>
				</div>
				<button type="button" onClick={handleMultiBtnClick} className="btn create_multi_btn js_create_multi_btn">Create</button>
			</div>
			
		</aside>

		
	)
}

export default Sidebar
