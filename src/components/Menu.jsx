import React from 'react';
import menuFull1 from '../assets/img/menu-full-1.png';
import menuFull2 from '../assets/img/menu-full-2.png';
import menu1 from '../assets/img/menu-1.png';
import menu2 from '../assets/img/menu-2.png';
import menu3 from '../assets/img/menu-3.png';
import menu4 from '../assets/img/menu-4.png';
import menu5 from '../assets/img/menu-5.png';

const menuList = [
	{ photo: menu1, alt: 'Menu 1' },
	{ photo: menu2, alt: 'Menu 2' },
	{ photo: menu3, alt: 'Menu 3' },
	{ photo: menu4, alt: 'Menu 4' },
	{ photo: menu5, alt: 'Menu 5' },
];

export default function Menu() {
	return (
		<div className='container mx-auto my-20 '>
			<div className='flex justify-center items-centers'>
				<div>
					<img src={menuFull1} alt='Menu full 1' className='w-full' />
				</div>
				<div>
					<img src={menuFull2} alt='Menu full 2' className='w-full' />
				</div>
			</div>

			<div className='flex justify-between items-center mt-10'>
				{menuList.map((menu, index) => (
					<div key={index} className='flex items-center justify-center'>
						<img src={menu.photo} alt={menu.alt} className='w-1/2' />
					</div>
				))}
			</div>
		</div>
	);
}
