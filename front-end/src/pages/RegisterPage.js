import React, { useState } from 'react';

function RegisterPage() {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	const handleSubmit = (event) => {
		event.preventDefault();
		// Lógica para registrar al usuario
		console.log('Registrando usuario:', username);
	};

	return (
		<div className='register-container'>
			<h2>Registro de Usuario</h2>
			<form onSubmit={handleSubmit}>
				<div>
					<label>Username</label>
					<input
						type='text'
						value={username}
						onChange={(e) => setUsername(e.target.value)}
					/>
				</div>
				<div>
					<label>Password</label>
					<input
						type='password'
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
				</div>
				<button type='submit'>Registrarse</button>
			</form>
		</div>
	);
}

export default RegisterPage;
