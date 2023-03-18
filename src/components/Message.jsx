import React from 'react';
import message1 from '../assets/img/message-1.png';
import message2 from '../assets/img/message-2.png';
import message3 from '../assets/img/message-3.png';

export default function Message() {
	return (
		<div className='container mx-auto my-20'>
			<div className='flex justify-between items-center gap-10'>
				<div>
					<h3 className='text-main text-4xl font-bold mb-10'>Get in touch</h3>
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
					<img src={message1} alt='Message-1' width={1000} />
				</div>
			</div>

			<div className='mt-10 flex justify-center items-center flex-col'>
				<img src={message2} alt='Message-2' width={1000} />
				<img src={message3} alt='Message-3' width={1000} />
			</div>
		</div>
	);
}
