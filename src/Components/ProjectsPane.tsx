import { Grid, Typography } from "@mui/material";
import ProjectRef from "./ProjectRef";

const ProjectsPane = () => {
  return (
    <Grid container spacing={1}
       id="projects"
       sx={{
        bgcolor : "lightblue",
        minHeight : "100vh"
       }}
    >
      <Grid item xs={12}><Typography
        variant="h4"
        component="h3"
        sx={{
          display: "grid",
          placeContent: "center",
          width : "100vw",
          flexWrap : "wrap",
          marginTop : "1rem"
        }}
      >
        Project Samples
      </Typography></Grid>
      <Grid item xs={6} sm={4} md={3}><ProjectRef
        name="Password generator"
        link="https://grgkimari.github.io/password-guru"
        imagelink="github.jpg"
      /></Grid>
      <Grid item xs={6} sm={4} md={3}><ProjectRef
        name="Quote machine"
        link="https://grgkimari.github.io/quote-machine"
        imagelink="github.jpg"
      /></Grid>
      <Grid item xs={6} sm={4} md={3}><ProjectRef
        name="React calculator"
        imagelink="github.jpg"
        link="https://grgkimari.github.io/nimble-calculator"
      /></Grid>
      <Grid item xs={6} sm={4} md={3}><ProjectRef
        name="Markdown Previewer"
        link="https://grgkimari.github.io/markdown-previewer"
        imagelink="github.jpg"
      /></Grid>
      <Grid item xs={6} sm={4} md={3}><ProjectRef
        name="Pomodoro Timer"
        link="https://grgkimari.github.io/pomodoro-timer-v2"
        imagelink="github.jpg"
      /></Grid>
      <Grid item xs={6} sm={4} md={3}><ProjectRef
        name="Beat Maker"
        link="https://grgkimari.github.io/special-disco"
        imagelink="github.jpg"
      /></Grid>
    </Grid>
  );
};

export default ProjectsPane;
