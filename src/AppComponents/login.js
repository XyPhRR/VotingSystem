import {
	Button,
	Container,
	FormControl,
	InputLabel,
	MenuItem,
	Select,
	TextField,
} from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LOG_IN = () => {
	const USER = [
		{
			id: 1,
			user: 'ADMIN',
		},
		{
			id: 2,
			user: 'STUDENT',
		},
	];
	const [user, setUser] = useState('');
	const navigate = useNavigate();
	console.log(user);
	return (
		<div
			className='ui container'
			style={{
				textAlign: 'right',
				marginTop: 150,
				marginRight: 100,
			}}
		>
			<div style={{ marginLeft: 20,  }}>

			</div>
			<Container
				sx={{
					border: 1,
					borderRadius: 10,
					borderColor: '#fa8a80',
					width: 275,
					height: 440,
					position: 'absolute',
					right: 100,
				}}
			>
				<div
					style={{
						marginRight: 60,
						color: '#d50000',
					}}
				>
					<h1>LOG IN</h1>
				</div>
				<form
					onSubmit={(e) => {
						e.preventDefault();

						navigate('/dashbord')
					}}
				>
					<FormControl>
						<InputLabel>
							{' '}
							SELECT USER
						</InputLabel>
						<Select
							required
							type='text'
							onChange={(e) =>
								setUser(e.target.value)
							}
							style={{
								width: 220,
								marginTop: 5,
							}}
						>
							{USER.map((user) => {
								return (
									<MenuItem
										key={user.id}
										value={user.user}
									>
										{user.user}
									</MenuItem>
								);
							})}
						</Select>
					</FormControl>
					<TextField
						style={{
							marginTop: 10,
						}}
						required
						type='text'
						label='Enter email'
					/>
					<TextField
						style={{
							marginTop: 10,
						}}
						required
						type='text'
						label='Enter RollNo'
					/>
					<TextField
						style={{
							marginTop: 10,
						}}
						required
						type='password'
						label='Enter password'
					/>
					<div>
						<Button
							size='large'
							type='submit'
							color='error'
							variant='contained'
							style={{
								marginTop: 10,
								width: 225,
							}}
						>
							LOG IN
						</Button>
					</div>
				</form>
			</Container>
		</div>
	);
};

export default LOG_IN;