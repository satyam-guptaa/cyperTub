import React, { useState } from 'react';
import './videoplayer.scss';
import { useLocation } from 'react-router-dom';

const VideoPlayer = () => {
	const location = useLocation();
	const [videoData] = useState(location.state);
	console.log(videoData);

	return (
		<section className='video-container'>
			<div className='video-player'>
				<video
					src='/assets/video/sample.mp4'
					type='video/mp4'
					controls
					width='100%'
					height='100%'
					autoPlay
				></video>
			</div>
			<div className='video-details'>
				<h1>{videoData.title}</h1>
				<p>
					{videoData.year} {videoData.category} {videoData.rating}
				</p>
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
