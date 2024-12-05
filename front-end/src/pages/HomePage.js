import React from 'react';
import Navbar from '../components/Navbar';
// Importa la imagen desde la ruta correcta
import backgroundImage from '../assets/images/background_data.jpg';
import CardCarousel from '../components/CardCarousel';

function HomePage() {
	return (
		<div className='flex flex-col min-h-screen bg-gray-100'>
			{/* Header */}
			<Navbar />
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
				</div>
				<CardCarousel />
			</main>

			{/* Footer */}
			<footer className='bg-gray-900 text-white sm:py-2 md:py-4 text-center'>
				<p className='text-sm md:text-base'>&copy; 2024 Gestor Financiero.</p>
			</footer>
		</div>
	);
}

export default HomePage;
