import React from 'react';
import { NavLink } from 'react-router-dom';
import './nav.scss';

const Nav = () => {
	const links = [
		{ path: '/', src: '/assets/icon-nav-home.svg', alt: 'home', id: 1 },
		{
			path: '/movies',
			src: '/assets/icon-nav-movies.svg',
			alt: 'movies',
			id: 2,
		},
		{
			path: '/tv-series',
			src: '/assets/icon-nav-tv-series.svg',
			alt: 'tv',
			id: 3,
		},
		{
			path: '/bookmarks',
			src: '/assets/icon-nav-bookmark.svg',
			alt: 'bookmark',
			id: 4,
		},
	];

	return (
		<nav className='navbar'>
			<div className='navbar-logo-container'>
				<img src='/assets/logo.svg' alt='logo' />
			</div>
			<div className='navbar-links-container'>
				{links.map((link) => (
					<NavLink key={link.id} to={link.path}>
						<img src={link.src} alt={link.alt} />
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
