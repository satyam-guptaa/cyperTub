import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';
import './App.scss';
import Nav from './components/navbar/Nav';
import Movies from './pages/moviespage/Movies';
import Home from './pages/homepage/Home';
import Tv from './pages/tvseriespage/Tv';
import Bookmark from './pages/bookmarkpage/Bookmark';
import VideoPlayer from './pages/videoPlayerPage/VideoPlayer';
import { fetchAppData } from './store/appDataSlice';
import { ToastContainer } from 'react-toastify';

function App() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchAppData());
	}, []);

	return (
		<div className='app'>
			{/* only to be displayed if any notification need to be sent */}
			<ToastContainer limit={1} autoClose={1500} />
			<Nav />
			<div className='app-content'>
				<Routes>
					<Route path='/' element={<Home />}></Route>
					<Route path='/movies' element={<Movies />}></Route>
					<Route path='/tv-series' element={<Tv />}></Route>
					<Route path='/bookmarks' element={<Bookmark />}></Route>
					<Route path='/stream' element={<VideoPlayer />}></Route>
				</Routes>
			</div>
		</div>
	);
}

export default App;
