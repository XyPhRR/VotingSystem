import { Typography } from "@mui/material";
import React from "react";
import BackButton from "../muiConstComp/BackButton";
import Divider1 from "../muiConstComp/Divider1";

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
				style={{
					marginLeft: 60,
					marginTop: -37,
				}}
			>
				NOTICE
			</Typography>
			<Divider1/>
		</div>
	);
};

export default Notice;
