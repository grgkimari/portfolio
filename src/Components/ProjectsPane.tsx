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
        imagelink="password-570317_960_720.jpg"
        description="An online strong password generator and strength checker built with React JS"
      /></Grid>
      <Grid item xs={6} sm={4} md={3}><ProjectRef
        name="Quote machine"
        link="https://grgkimari.github.io/quote-machine"
        imagelink='quotes-7669023_960_720.png'
      /></Grid>
      <Grid item xs={6} sm={4} md={3}><ProjectRef
        name="React calculator"
        imagelink="calculator-168360_960_720.jpg"
        link="https://grgkimari.github.io/nimble-calculator"
      /></Grid>
      <Grid item xs={6} sm={4} md={3}><ProjectRef
        name="Markdown Previewer"
        link="https://grgkimari.github.io/markdown-previewer"
        imagelink="markdown-here.png"
      /></Grid>
      <Grid item xs={6} sm={4} md={3}><ProjectRef
        name="Pomodoro Timer"
        link="https://grgkimari.github.io/pomodoro-timer-v2"
        imagelink='stopwatch-5153023_960_720.jpg'
      /></Grid>
      <Grid item xs={6} sm={4} md={3}><ProjectRef
        name="Beat Maker"
        link="https://grgkimari.github.io/special-disco"
        imagelink="drums-3109364_960_720.jpg"
      /></Grid>
    </Grid>
  );
};

export default ProjectsPane;
