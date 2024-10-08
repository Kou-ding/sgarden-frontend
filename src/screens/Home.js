import { Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { memo } from "react";

const Home = () => {
	const navigate = useNavigate();

	return (
		<Grid container direction="column" alignItems="center" justifyContent="center">
			<Typography variant="h3" sx={{ color: "white.main", p: 4 }}>{"Main page"}</Typography>
			<Typography variant="text" sx={{ color: "white.main", p: 4 }}>{"Make this your home page!"}</Typography>
		</Grid>
	);
};

export default memo(Home);
