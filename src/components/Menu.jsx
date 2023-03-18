import React from 'react';
import menu1 from '../assets/img/menu-1.png';
import menu2 from '../assets/img/menu-2.png';

export default function Menu() {
	return (
		<div className='container mx-auto my-20 '>
			<h3 className='text-main text-4xl font-bold mb-4'>Our Menu</h3>

			<div className='flex justify-between items-center'>
				<div className='border rounded-[90px] border-main w-[45%]'>
					<img src={menu1} alt='Menu full 1' className='w-full' />
				</div>
				<div className='border rounded-[90px] border-main w-[45%]'>
					<img src={menu2} alt='Menu full 2' className='w-full' />
				</div>
			</div>
		</div>
	);
}
