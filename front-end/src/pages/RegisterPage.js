import React from 'react';
import RegisterForm from '../components/RegisterForm';
import Navbar from '../components/Navbar';

function RegisterPage() {
	// Función que se ejecuta al enviar el formulario
	const handleRegister = (formData) => {
		console.log('Datos enviados:', formData);
		// Aquí puedes llamar a una API para registrar al usuario
	};

	return (
		<div className='flex flex-col min-h-screen bg-gray-700'>
			<div className='flex flex-col justify-center items-center min-h-screen bg-indigo-900 relative overflow-hidden'>
				{/* Fondo con blur */}
				<div className='absolute inset-0 bg-indigo-700 opacity-60 backdrop-blur-md'></div>

				{/* Contenedor del formulario */}
				<div className='w-full max-w-screen-lg px-4 md:h-full relative z-10'>
					<div className='flex justify-center'>
						<RegisterForm onSubmit={handleRegister} />
					</div>
				</div>
			</div>
		</div>
	);
}

export default RegisterPage;
