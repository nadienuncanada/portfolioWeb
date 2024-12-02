import React from 'react';
import { Link } from 'react-router-dom';

// Importa la imagen desde la ruta correcta
import backgroundImage from '../assets/images/background_data.jpg';
import example1 from '../assets/images/example1.jpg';
import example2 from '../assets/images/example2.jpeg';

function HomePage() {
	return (
		<div className='flex flex-col min-h-screen bg-gray-100'>
			{/* Header */}
			<header className='bg-violet-950 text-white py-6 md:py-8 px-4 shadow-md'>
				<div className='max-w-8xl mx-auto flex justify-between items-center lg:px-10 xl:px-20'>
					<h1 className='text-3xl md:text-4xl font-bold '>
						<Link to='/'>Gestor Financiero</Link>
					</h1>
					<nav className='flex gap-4'>
						<Link
							to='/register'
							className='bg-violet-600 hover:bg-violet-900 text-white sm:py-1 md:py-2 lg:py-4 px-4 rounded-md'>
							Registrarse
						</Link>
						<Link
							to='/login'
							className='bg-violet-600 hover:bg-violet-900 text-white sm:py-1 md:py-2 lg:py-4 px-4 rounded-md'>
							Iniciar Sesión
						</Link>
					</nav>
				</div>
			</header>

			{/* Main Section with Image and Blur */}
			<main className='relative flex-grow text-center py-20 px-4'>
				{/* Imagen de fondo con desenfoque */}
				<div
					className='absolute inset-0 bg-cover bg-center filter blur-sm'
					style={{ backgroundImage: `url(${backgroundImage})` }}></div>

				{/* Overlay negro */}
				<div className='absolute inset-0 bg-black opacity-50'></div>

				{/* Contenido principal */}
				<div className='relative z-10 text-white'>
					<p className='text-2xl md:text-3xl font-semibold mb-4'>
						Bienvenido a tu gestor financiero.
					</p>
					<p className='text-lg md:text-xl mb-12'>
						Regístrate o inicia sesión para comenzar a gestionar tus finanzas de
						manera fácil y segura.
					</p>

					{/* Contenedor de las tarjetas */}
					<div className='flex md:grid md:grid-cols-3 gap-8 overflow-x-scroll md:overflow-visible px-4 max-w-6xl mx-auto'>
						{/* Tarjeta 1 */}
						<div className='min-w-[50%] max-w-full md:min-w-0 bg-white rounded-lg shadow-lg overflow-hidden flex-shrink-0 md:flex-shrink'>
							<img
								src={example2}
								alt='Imagen ejemplo 1'
								className='w-full h-auto object-cover'
							/>
							<div className='p-4'>
								<h3 className='text-xl font-semibold mb-2'>
									Gestiona tus ingresos
								</h3>
								<p className='text-gray-700'>
									Controla tus ingresos y mantente al tanto de tus finanzas
									personales con facilidad.
								</p>
							</div>
						</div>

						{/* Tarjeta 2 */}
						<div className='min-w-[50%] max-w-full md:min-w-100 bg-white rounded-lg shadow-lg overflow-hidden flex-shrink-0 md:flex-shrink'>
							<img
								src={example2}
								alt='Imagen ejemplo 2'
								className='w-full h-auto object-cover'
							/>
							<div className='p-4'>
								<h3 className='text-xl font-semibold mb-2'>
									Planifica tus gastos
								</h3>
								<p className='text-gray-700'>
									Organiza tus gastos para alcanzar tus metas financieras.
								</p>
							</div>
						</div>

						{/* Tarjeta 3 */}
						<div className='min-w-[50%] max-w-[100%] md:min-w-0 bg-white rounded-lg shadow-lg overflow-hidden flex-shrink-0 md:flex-shrink'>
							<img
								src={example2}
								alt='Imagen ejemplo 3'
								className='w-full h-auto object-cover'
							/>
							<div className='p-4'>
								<h3 className='text-xl font-semibold mb-2'>
									Reportes detallados
								</h3>
								<p className='text-gray-700'>
									Obtén reportes visuales para analizar tu situación financiera.
								</p>
							</div>
						</div>
					</div>
				</div>
			</main>

			{/* Footer */}
			<footer className='bg-gray-900 text-white sm:py-2 md:py-4 text-center'>
				<p className='text-sm md:text-base'>&copy; 2024 Gestor Financiero.</p>
			</footer>
		</div>
	);
}

export default HomePage;
