import './dashboardtile.css';
import { useState } from 'react'

function DashboardTile({  title, number, number2 }) {

	return (
		<div className="tile">
			<div className='tile_body'>
				<h2 className="tile_title">{title}</h2>
				<p className="tile_numbers">{number}</p>
			</div>
		</div>
	)
}

export default DashboardTile