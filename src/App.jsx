import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './App.scss';
import Nav from './components/navbar/Nav';
import Movies from './pages/moviespage/Movies';
import Home from './pages/homepage/Home';
import Tv from './pages/tvseriespage/Tv';
import Bookmark from './pages/bookmarkpage/Bookmark';
import { fetchAppData } from './store/appDataSlice';

function App() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchAppData());
	}, []);

	return (
		<div className='app'>
			<Nav />
			<div className='app-content'>
				<Routes>
					<Route path='/' element={<Home />}></Route>
					<Route path='/movies' element={<Movies />}></Route>
					<Route path='/tv-series' element={<Tv />}></Route>
					<Route path='/bookmarks' element={<Bookmark />}></Route>
				</Routes>
			</div>
		</div>
	);
}

export default App;
