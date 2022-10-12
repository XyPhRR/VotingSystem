import { Container, Typography } from '@mui/material';
import React from 'react';
import BackButton from '../muiConstComp/BackButton';
import Divider1 from '../muiConstComp/Divider1';

const Dashbord = () => {
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
				DASHBORD
			</Typography>
			<Divider1 />
			<div style={{ marginTop: 20, marginLeft: 20 }}>
				<Container
					sx={{ border: 1, borderRadius: 3, width: 'fit-content', height: 'fit-content' }}
				>
					<div>NO. OF STUDENTS : </div>
					<div style={{ marginTop: 40 }} />
					<div style={{ marginTop: 20 }}>NO. OF BCA STUDENTS : </div>
					<div style={{ marginTop: 20 }}>NO. OF Home Science STUDENTS : </div>
					<div style={{ marginTop: 20 }}>NO. OF Science STUDENTS : </div>

				</Container>
			</div>
		</div>
	);
};

export default Dashbord;
