import React from 'react';
import about from '../assets/img/about-1.png';

export default function About() {
	return (
		<div className='container mx-auto my-20 flex justify-between items-center gap-10'>
			<div className='mb-10'>
				<h3 className='text-main text-4xl font-bold mb-4'>About us</h3>
				<p>
					Kipfel was chosen as our croissant brand name. The name Kipfel is taken from the early history of the cake
					before it was called a croissant. Inspired by delicious croissants and crescent moons - a symbol of the
					beginning of rebirth and a symbol of dreams come true. We have created a logo with flexible color changeable
					brushstrokes on different color backgrounds. Show high adaptability everywhere so that our brand is known to
					the world. The logo is chosen in yellow-orange - showing confidence and always full of energy ready to work,
					ready to face challenges.
				</p>
				<br />
				<p>
					After years of research and learning, we will bring you croissants with our own recipe that combines
					traditional and modern flavors. With the slogan <b>"Baked fresh, just for you"</b> - Kipfel's open kitchen
					counter will bring you a delicious baked croissant just for you every day. "A little bliss in every bite."
				</p>
			</div>
			<img src={about} alt='About 2' width={500} />
		</div>
	);
}
