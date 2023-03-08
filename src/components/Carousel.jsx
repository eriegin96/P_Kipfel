import React from 'react';
import carousel from '../assets/img/carousel.png';

export default function Carousel() {
	return (
		<div className='my-20'>
			<img src={carousel} alt='Carousel' className='container mx-auto' />
		</div>
	);
}
