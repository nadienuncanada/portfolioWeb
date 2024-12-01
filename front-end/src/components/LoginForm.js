import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const response = await axios.post(
				process.env.REACT_APP_API_BASE_URL + '/login',
				new URLSearchParams({
					username,
					password,
				})
			);
			alert(`Token: ${response.data.access_token}`);
		} catch (error) {
			alert(error.response?.data?.detail || 'An error occurred');
		}
	};

	return (
		<form onSubmit={handleSubmit}>
			<h2>Login</h2>
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
			<button type='submit'>Login</button>
		</form>
	);
};

export default Login;
