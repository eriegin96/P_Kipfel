import React from 'react';
import des1 from '../assets/img/des-1.png';
import des2 from '../assets/img/des-2.png';
import des3 from '../assets/img/des-3.png';

export default function Description() {
	return (
		<div className='container mx-auto grid grid-cols-2 grid-rows-2'>
			<img src={des2} alt='description 2' className='row-span-2 h-full' />
			<img src={des1} alt='description 1' />
			<img src={des3} alt='description 3' />
		</div>
	);
}
