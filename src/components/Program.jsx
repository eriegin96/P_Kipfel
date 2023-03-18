import React from 'react';
import program1 from '../assets/img/program-1.png';
import program2 from '../assets/img/program-2.png';

export default function Program() {
	return (
		<div className='container mx-auto'>
			<h3 className='text-main text-4xl font-bold mb-4'>Upcoming Program</h3>

			<div className='flex justify-between items-center'>
				<div className='border border-main w-[45%]'>
					<img src={program1} alt='program 1' className='w-full' />
				</div>
				<div className='border border-main w-[45%]'>
					<img src={program2} alt='program 2' className='w-full' />
				</div>
			</div>
		</div>
	);
}
