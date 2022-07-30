import { Button } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const BackButton = () => {
	return (
		<div>
			<Button
				variant="filled"
				size="small"
				style={{ marginBottom: 5 }}
				sx={{ borderBlockStyle: 10 }}
			>
				<ArrowBackIcon />
			</Button>
		</div>
	);
};

export default BackButton;
