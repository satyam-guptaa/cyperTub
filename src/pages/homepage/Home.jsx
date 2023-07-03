import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAppData } from '../../store/appDataSlice';
import './home.scss';

const Home = () => {
	const { data } = useSelector((state) => state.appData);
	const [fetchedData, setFectchedData] = useState([]);
	const dispatch = useDispatch();

	useEffect(() => {
		setFectchedData(data);
	}, [data]);

	useEffect(() => {
		dispatch(fetchAppData());
	}, []);

	if (fetchedData.length > 0) {
		console.log(fetchedData.filter((item) => item.isTrending));
	}

	return <div>Home</div>;
};

export default Home;
