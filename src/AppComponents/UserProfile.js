import { Typography } from '@mui/material';
import React from 'react';
import BackButton from '../muiConstComp/BackButton';
import Divider1 from '../muiConstComp/Divider1';

const UserProfile = () => {
	return (
		<div
			style={{
				marginTop: 70,
				marginLeft: 250
			}}
		>
			<BackButton/>
			<Typography
				fontSize={20}
				fontWeight='bold'
				style={{
					marginLeft: 60,
					marginTop: -37,
				}}
			>
				USER PROFILE
			</Typography>
			<Divider1/>
		</div>
	);
};

export default UserProfile;
