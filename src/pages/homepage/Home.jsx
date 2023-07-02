import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchAppData } from '../../store/appDataSlice';
import './home.scss';

const Home = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchAppData());
	}, []);
	return <div>Home</div>;
};

export default Home;
