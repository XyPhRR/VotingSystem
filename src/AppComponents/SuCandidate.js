import { Typography } from '@mui/material';
import React, {useEffect, useState} from 'react';
import Divider1 from '../muiConstComp/Divider1';
import BackButton from '../muiConstComp/BackButton';
import api from '../api/api';

const SuCandidate = () => {
	const [lists, setLists] = useState([])
	useEffect(() => {
		fetchList()
	}, [])

	const fetchList = async () => {
		try {
			const response = await api.get(`/api/candidate`)
			setLists(response.data.data)
		} catch (error) {
			setLists([])
		}
	}
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

export default SuCandidate;
