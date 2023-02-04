import { Avatar, Paper, Stack, Typography } from "@mui/material";

const Hero = () => {
  return (
    <Stack
      component={"div"}
      sx={{
        width: "100%",
        height: "100vh",
        bgcolor: "lightgray",
        marginTop: "60px",
      }}
    >
      <Paper
        
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
          backgroundColor: "white",
        }}
      >
        <Avatar
          sx={{
            width: "250px",
            height: "250px",
          }}
          alt="George's avatar"
          src="myavatar.png"
        />
        <Typography variant="h4" component={"h1"}>
          Hello
        </Typography>
        <Typography variant="h6" component={"h2"}>
          I'm George, a software engineer and problem solver.
        </Typography>
      </Paper>
    </Stack>
  );
};

export default Hero;
