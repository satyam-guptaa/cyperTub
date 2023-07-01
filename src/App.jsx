import { useState } from 'react';
import './App.scss';
import { Home } from './pages/homepage/Home';
import Nav from './components/navbar/Nav';

function App() {
	return (
		<div className='app'>
			<Nav />
		</div>
	);
}

export default App;
