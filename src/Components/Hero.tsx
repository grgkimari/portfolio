import { Avatar, Icon, IconButton, Paper, Stack, Tooltip, Typography } from "@mui/material";
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import { GitHub, LinkedIn } from "@mui/icons-material";
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
        <Stack direction="row">
        <Tooltip title="Email">
        <IconButton href={`mailto:grgkimari@gmail.com`}>
          <AlternateEmailIcon sx={{color : "black",

        borderRadius: "50%"
        }}/>
        </IconButton>
        </Tooltip>
        <Tooltip title="Github">
        <IconButton href="https://github.com/grgkimari" target={"_blank"}>
          <GitHub sx={{color : "black",
        bgcolor :"white",
        borderRadius: "50%"
        }}/>
        </IconButton>
        </Tooltip>
        <Tooltip title="Linkedin">
        <IconButton href="https://www.linkedin.com/in/george-kamuyu-4794b9236" target={"_blank"}>
          <LinkedIn sx={{
            color: "black",
            
          }}/>
        </IconButton>
        </Tooltip>
        <Tooltip title="Hackerrank">
        <IconButton href="https://hackerrank.com/grgkimari" target={"_blank"}>
          <Icon>
          <img src="hackerrank.svg" alt="hackerrank icon"/>
          </Icon>
        </IconButton>
        </Tooltip>
        </Stack>
      </Paper>
    </Stack>
  );
};

export default Hero;
