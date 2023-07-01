import React from 'react';
import './nav.scss';

const Nav = () => {
	return (
		<nav className='navbar'>
			<div>
				<img src='/assets/logo.svg' alt='' />
			</div>
			<div>
				<button>
					<img src='/assets/icon-nav-home.svg' alt='' />
				</button>
				<button>
					<img src='/assets/icon-nav-movies.svg' alt='' />
				</button>
				<button>
					<img src='/assets/icon-nav-tv-series.svg' alt='' />
				</button>
				<button>
					<img src='/assets/icon-nav-bookmark.svg' alt='' />
				</button>
			</div>
			<div></div>
		</nav>
	);
};

export default Nav;
