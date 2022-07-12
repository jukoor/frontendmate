import './header.css';

function Header({headline}) {

	return (
		<header className='header'>
			<div className='header_container'>
				<h2 className="headline">{headline}</h2>
			</div>
		</header>
	)
}

export default Header
