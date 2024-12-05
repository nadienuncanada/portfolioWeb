import React from 'react';
import { Link } from 'react-router-dom';
function Navbar() {
	return (
		<header className='bg-violet-950 text-white py-6 md:py-8 px-4 shadow-md'>
			<div className='max-w-8xl mx-auto flex justify-between items-center lg:px-10 xl:px-20'>
				<h1 className='text-3xl md:text-4xl font-bold '>
					<Link to='/'>Gestor Financiero</Link>
				</h1>
				<nav className='flex gap-4'>
					<Link
						to='/register'
						className=' text-stone-700 sm:py-4 md:py-2 lg:py-4 px-4 font-bold'>
						Registrarse
					</Link>
					<Link
						to='/login'
						className=' text-stone-700 sm:py-4 md:py-2 lg:py-4 px-4 font-bold'>
						Iniciar Sesión
					</Link>
				</nav>
			</div>
		</header>
	);
}
export default Navbar;
