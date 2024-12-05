import React from 'react';

function TarjetaReutilizable({ titulo, texto, imagen }) {
	return (
		<div className='bg-white rounded-lg shadow-lg overflow-hidden w-full md:w-full max-w-md mx-auto hover:scale-105'>
			<img
				src={imagen}
				alt={titulo}
				className='w-full h-80 object-cover'
			/>
			<div className='p-4'>
				<h3 className='text-lg font-semibold'>{titulo}</h3>
				<p>{texto}</p>
			</div>
		</div>
	);
}

export default TarjetaReutilizable;
