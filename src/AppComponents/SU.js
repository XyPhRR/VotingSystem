// import { Stack } from '@mui/material'
import {
	Button,
	Container,
	Stack,
	Typography,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import BackButton from "../muiConstComp/BackButton";
import Divider1 from "../muiConstComp/Divider1";
import "./styles.css";

let FolderIcon1 = require("../../src/folder.jpg");

const StudentsUnion = () => {
	const navigate = useNavigate();
	return (
		<div
			style={{
				textAlign: "left",
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
				STUDENTS' UNION
			</Typography>
			<Divider1 />

			<Stack
				direction="row"
				spacing={2}
				style={{
					textAlign: "left",
					marginTop: 100,
				}}
			>
				<Button
					variant="filled"
					size="large"
					onClick={() =>
						navigate(
							"/student-union/leader",
						)
					}
				>
					<Container
						sx={{
							border: 1,
							width: 300,
							borderRadius: 3,
							height: 130,
							borderColor: "#bdbdbd",
						}}
					>
						<img
							style={{
								marginTop: 10,
							}}
							align="left"
							src={FolderIcon1}
							alt="folder"
							className="folderIcon1"
							width={70}
							height={60}
						/>
						<p style={{ marginTop: 90 }}>
							<Typography
								fontSize={16}
								variant="h1"
								component="h1"
								align="bottom"
								textAlign="left"
							>
								{" "}
								STUDENTS' UNION LEADERS{" "}
							</Typography>
						</p>
					</Container>
				</Button>
				<Button
					variant="filled"
					size="small"
					onClick={() =>
						navigate(
							"/student-union/candidate",
						)
					}
				>
					<Container
						sx={{
							border: 1,
							width: 300,
							borderRadius: 3,
							height: 130,
							borderColor: "#bdbdbd",
						}}
					>
						<img
							style={{
								marginTop: 10,
							}}
							align="left"
							src={FolderIcon1}
							alt="folder"
							className="folderIcon1"
							width={70}
							height={60}
						/>
						<p style={{ marginTop: 90 }}>
							<Typography
								fontSize={16}
								variant="h1"
								component="h1"
								textAlign="left"
							>
								{" "}
								STUDENTS' UNION CANDIDATE{" "}
							</Typography>
						</p>
					</Container>
				</Button>
				<Button
					variant="filled"
					size="small"
					onClick={() =>
						navigate(
							"/student-union/voting",
						)
					}
				>
					<Container
						sx={{
							border: 1,
							width: 300,
							borderRadius: 3,
							height: 130,
							borderColor: "#bdbdbd",
						}}
					>
						<img
							style={{
								marginTop: 10,
							}}
							align="left"
							src={FolderIcon1}
							alt="folder"
							className="folderIcon1"
							width={70}
							height={60}
						/>
						<p style={{ marginTop: 90 }}>
							<Typography
								fontSize={16}
								variant="h1"
								component="h1"
								textAlign="left"
							>
								{" "}
								STUDENTS' UNION VOTING{" "}
							</Typography>
						</p>
					</Container>
				</Button>
			</Stack>
		</div>
	);
};

export default StudentsUnion;
