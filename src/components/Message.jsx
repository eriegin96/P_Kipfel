import React from 'react';
import message from '../assets/img/message.png';

export default function Message() {
	return (
		<div className='container mx-auto my-20'>
			<div className='flex justify-between items-center gap-10'>
				<div>
					<h3 className='text-4xl font-bold mb-10'>Get in touch</h3>
					<p>
						It is our pleasure to deliver to you our freshly baked croissant. Crunchy texture with a touch of delicate
						taste, the qualities will guarantee an irresistible sweet lust.
					</p>
					<br />
					<p>
						Kipfel takes on the duty to serve you our most delicious crescent-shaped pastry. We are looking forward to
						your feedback.
					</p>
				</div>
				<div>
					<img src={message} alt='Message' width={1000} />
				</div>
			</div>
		</div>
	);
}
