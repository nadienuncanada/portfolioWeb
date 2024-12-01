import React from 'react';
import { Link } from 'react-router-dom';

// Importa la imagen desde la ruta correcta
const backgroundImage = '/assets/images/background_data.jpg';

function HomePage() {
	return (
		<div className='flex flex-col min-h-screen bg-gray-100'>
			{/* Header */}
			<header className='bg-violet-950 text-white py-6 px-4 shadow-md'>
				<div className='max-w-7xl mx-auto flex justify-between items-center'>
					<h1 className='text-3xl font-bold'>
						<Link to='/'>Gestor Financiero</Link>
					</h1>
					<nav>
						<Link
							to='/register'
							className='bg-violet-600 hover:bg-violet-900 text-white py-2 px-4 rounded-md mr-4'>
							Registrarse
						</Link>
						<Link
							to='/login'
							className='bg-violet-600 hover:bg-violet-900 text-white py-2 px-4 rounded-md'>
							Iniciar Sesión
						</Link>
					</nav>
				</div>
			</header>

			{/* Main Section with Image and Blur */}
			<main
				className='relative flex-grow text-center py-20 px-4 bg-cover bg-center'
				style={{ backgroundImage: `url(${backgroundImage})` }}>
				{/* Blur overlay */}
				<div className='absolute inset-0 bg-black opacity-50 blur-sm'></div>

				{/* Text on top of the image */}
				<div className='relative z-10 text-white'>
					<p className='text-2xl md:text-3xl font-semibold mb-4'>
						Bienvenido a tu gestor financiero.
					</p>
					<p className='text-lg md:text-xl'>
						Regístrate o inicia sesión para comenzar a gestionar tus finanzas de
						manera fácil y segura.
					</p>
				</div>
			</main>

			{/* Footer */}
			<footer className='bg-gray-900 text-white py-4 text-center'>
				<p className='text-sm'>&copy; 2024 Gestor Financiero.</p>
			</footer>
		</div>
	);
}

export default HomePage;
