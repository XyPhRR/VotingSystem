import { Typography } from "@mui/material";
import React from "react";
import BackButton from "../muiConstComp/BackButton";
import Divider1 from "../muiConstComp/Divider1";

const About = () => {
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
				style={{
					marginLeft: 60,
					marginTop: -37,
				}}
			>
				ABOUT
			</Typography>
			<Divider1 />
		</div>
	);
};

export default About;
