import React from 'react';
import logo from '../assets/img/logo.png';

export default function Footer() {
	return (
		<div className='bg-dark text-main py-5 border-t border-main'>
			<div className='container mx-auto flex justify-between items-center'>
				<img src={logo} alt='logo' width={100} />

				<div>
					<div className='flex items-center gap-2'>
						<svg
							stroke='currentColor'
							fill='currentColor'
							stroke-width='0'
							viewBox='0 0 20 20'
							aria-hidden='true'
							height='1em'
							width='1em'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								fill-rule='evenodd'
								d='M7 2a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V4a2 2 0 00-2-2H7zm3 14a1 1 0 100-2 1 1 0 000 2z'
								clip-rule='evenodd'
							></path>
						</svg>
						Phone: 0905157474
					</div>
					<div className='flex items-center gap-2'>
						<svg
							stroke='currentColor'
							fill='currentColor'
							stroke-width='0'
							viewBox='0 0 20 20'
							aria-hidden='true'
							height='1em'
							width='1em'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path d='M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z'></path>
							<path d='M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z'></path>
						</svg>
						Email: info@kipfelhcm.com
					</div>
					<div className='flex items-center gap-2'>
						<svg
							stroke='currentColor'
							fill='currentColor'
							stroke-width='0'
							viewBox='0 0 20 20'
							aria-hidden='true'
							height='1em'
							width='1em'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path d='M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z'></path>
						</svg>
						Hotline: 1900 3338
					</div>
					<div className='flex items-center gap-2'>
						<svg
							stroke='currentColor'
							fill='currentColor'
							stroke-width='0'
							viewBox='0 0 20 20'
							aria-hidden='true'
							height='1em'
							width='1em'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								fill-rule='evenodd'
								d='M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z'
								clip-rule='evenodd'
							></path>
						</svg>
						Address: 72 Le Thanh Ton, District 1, Ho Chi Minh City
					</div>
				</div>
			</div>
		</div>
	);
}
