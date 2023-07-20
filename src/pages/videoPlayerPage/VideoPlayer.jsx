import React, { useState, useRef, useEffect } from 'react';
import './videoplayer.scss';
import { useLocation } from 'react-router-dom';
import RenderDetails from '../../components/cardhelper/renderDetails/RenderDetails';

const VideoPlayer = () => {
	const location = useLocation();
	const videoRef = useRef(null);
	const [videoData] = useState(location.state);

	useEffect(() => {
		if (
			window.screen.orientation &&
			/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
				navigator.userAgent
			)
		) {
			document.addEventListener(
				'fullscreenchange',
				handleFullscreenChange
			);
		}

		return () => {
			document.removeEventListener(
				'fullscreenchange',
				handleFullscreenChange
			);
		};
	}, []);

	const handleFullscreenChange = () => {
		if (document.fullscreenElement === videoRef.current) {
			window.screen.orientation
				.lock('landscape')
				.catch((err) => console.error('Orientation lock error:', err));
		} else {
			window.screen.orientation.unlock();
		}
	};

	return (
		<section className='video-container'>
			<div className='video-player'>
				<video
					src='/assets/video/sample.mp4'
					ref={videoRef}
					type='video/mp4'
					controls
					width='100%'
					height='100%'
					autoPlay
				></video>
			</div>
			<div className='video-details'>
				<h1>{videoData.title}</h1>
				<RenderDetails
					year={videoData.year}
					category={videoData.category}
					rating={videoData.rating}
					fontSize='1.5rem'
				/>
				<p>
					Lorem, ipsum dolor sit amet consectetur adipisicing elit.
					Error non temporibus in obcaecati fugit impedit! Molestias
					quia quidem aut dignissimos dicta ab exercitationem error,
					nisi placeat soluta mollitia obcaecati saepe, sunt
					consequatur, voluptas ex ipsam voluptatem expedita rem
					facilis repudiandae? Recusandae, nihil at amet dolorem
					ducimus ullam esse dolor, earum minima animi atque.
					Exercitationem, aut minima. Illo pariatur a nam cum
					consequuntur. Exercitationem atque totam inventore mollitia
					iure tempora molestiae natus, excepturi ipsum. Modi quasi ab
					in, aperiam, possimus minima neque eum, a molestiae beatae
					placeat quam! Veniam, dignissimos et reiciendis
					exercitationem possimus distinctio provident ab impedit,
					ipsa repudiandae doloremque.
				</p>
			</div>
		</section>
	);
};

export default VideoPlayer;
