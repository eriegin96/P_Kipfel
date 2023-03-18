import React from 'react';
import logo from '../assets/img/logo.png';

export default function Navbar() {
	return (
		<div className='bg-dark'>
			<nav className='text-main container mx-auto flex justify-between items-center py-4 border-b border-main'>
				<a href='#'>
					<img src={logo} alt='logo' width={100} />
				</a>
				<div className='uppercase flex justify-between items-center'>
					<a href='#about-us' className='mr-10 font-bold hover:underline'>
						About us
					</a>
					<a href='#description' className='mx-10 font-bold hover:underline'>
						Description
					</a>
					<a href='#menu' className='mx-10 font-bold hover:underline'>
						Menu
					</a>
					<a href='#message' className='ml-10 font-bold hover:underline'>
						Message
					</a>
				</div>
			</nav>
		</div>
	);
}
