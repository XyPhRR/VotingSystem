import React, {useEffect, useState} from 'react';
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
				marginTop: 200,
				marginLeft: 400,
			}}
		>
			SuCandidate
		</div>
	);
};

export default SuCandidate;
