import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const response = await axios.post(
				process.env.REACT_APP_API_BASE_URL + '/register',
				{
					username,
					password,
				}
			);
			alert(response.data.message);
		} catch (error) {
			alert(error.response?.data?.detail || 'An error occurred');
		}
	};

	return (
		<form onSubmit={handleSubmit}>
			<h2>Register</h2>
			<input
				type='text'
				placeholder='Username'
				value={username}
				onChange={(e) => setUsername(e.target.value)}
				required
			/>
			<input
				type='password'
				placeholder='Password'
				value={password}
				onChange={(e) => setPassword(e.target.value)}
				required
			/>
			<button type='submit'>Register</button>
		</form>
	);
};

export default Register;
