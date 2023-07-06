import React from 'react';
import { NavLink } from 'react-router-dom';
import './nav.scss';
import { links } from '../../utilities/constants/linksSVG.jsx';

const Nav = () => {
	return (
		<nav className='navbar'>
			<div className='navbar-logo-container'>
				<img src='/assets/logo.svg' alt='logo' />
			</div>
			<div className='navbar-links-container'>
				{links.map((link) => (
					<NavLink
						key={link.id}
						to={link.path}
						// className={({ isActive, isPending }) =>
						// 	isActive ? 'activeNavlink' : ''
						// }
						className={({ isActive, isPending }) =>
							isPending
								? 'navlink-pending'
								: isActive
								? 'navlink-active'
								: 'navlink'
						}
						end
					>
						{link.svg}
					</NavLink>
				))}
			</div>
			<div className='navbar-avatar-container'>
				<button>
					<img src='/assets/image-avatar.png' alt='avatar' />
				</button>
			</div>
		</nav>
	);
};

export default Nav;
