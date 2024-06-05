import React from 'react';

export const Header = () => {
	return (
		<header className=' flex justify-between items-center bg-slate-500 px-10 py-3'>
			<div className=' flex gap-5 items-center'>
				<p className=' font-medium text-[26px] text-black'>Rozbirka</p>
				<button className='bg-cBlue px-[20px] py-[14px] rounded-[8px]'>Catalogue</button>
				<input type='search' className=' bg-slate-600 rounded-[8px] w-[700px]'></input>
			</div>
			<div className='flex gap-2'>
				<button className='bg-cBlue'>Garage</button>
				<button className='bg-cBlue'>Cabinet</button>
				<button className='bg-cBlue'>Favorite</button>
				<button className='bg-cBlue'>Trashs</button>
			</div>
		</header>
	);
};
