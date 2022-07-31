import React from 'react';
import Divider1 from '../muiConstComp/Divider1';
import BackButton from '../muiConstComp/BackButton';
import { Typography } from '@mui/material';

const SuLeaders = () => {
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
				style={{
					marginLeft: 60,
					marginTop: -37,
				}}
			>
				SU LEADERS
			</Typography>
			<Divider1 />
		</div>
	);
};

export default SuLeaders;
