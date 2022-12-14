import { Typography } from '@mui/material';
import React from 'react';
import BackButton from '../muiConstComp/BackButton';
import Divider1 from '../muiConstComp/Divider1';
import api from '../api/api';

const About = () => {
	console.log(api)
	return (
		<div
			style={{
				marginTop: 70,
				marginLeft: 250,
			}}
		>
			<BackButton />
			<Typography
				fontSize={20}
				fontWeight='bold'
				style={{
					marginLeft: 60,
					marginTop: -37,
				}}
			>
				ABOUT
			</Typography>
			<Divider1 />
			<div style={{ marginTop: 20, marginLeft: 20, fontWeight: 'bold' }}>
				For more information contact @hriata_83
			
			</div>
		</div>
	);
};

export default About;
