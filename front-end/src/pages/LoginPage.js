import React from 'react';
import LoginForm from '../components/LoginForm';
import Navbar from '../components/Navbar';

function LoginPage() {
	// Función que se ejecuta al enviar el formulario
	const handleLogin = (formData) => {
		console.log('Datos enviados:', formData);
		// Aquí puedes llamar a una API para registrar al usuario
	};

	return (
		<div className='flex flex-col min-h-screen bg-gray-700'>
			{/* Header */}
			<div className='flex flex-col justify-center items-center min-h-screen bg-indigo-900'>
				<div className='w-full max-w-screen-lg px-4 md:h-full'>
					{/* Contenedor centrado del formulario */}
					<div className='flex justify-center'>
						<LoginForm onSubmit={handleLogin} />
					</div>
				</div>
			</div>
		</div>
	);
}

export default LoginPage;
