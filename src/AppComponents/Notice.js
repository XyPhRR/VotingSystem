import { Button, Container, Typography } from '@mui/material';
import React from 'react';
import BackButton from '../muiConstComp/BackButton';
import Divider1 from '../muiConstComp/Divider1';
import NotificationsIcon from '@mui/icons-material/Notifications';

const Notice = () => {
	return (
		<div
			style={{
				marginLeft: 250,
				marginTop: 70,
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
				NOTICE
			</Typography>
			<Divider1 />
			<div style={{ marginTop: 20, marginLeft: 20 }}>
				<Container sx={{ height: 'fit-content', width: 'fit-content', border: 1, borderRadius: 3 }}>
					<Button startIcon={<NotificationsIcon/>}> NOTIFICATION </Button>
				</Container>
			</div>
		</div>
	);
};

export default Notice;
