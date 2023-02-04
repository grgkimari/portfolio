import { Paper, Typography } from "@mui/material";
import "../TopNavigationPane/TopNavigationPane.css";

const About = () => {
  return (
    <Paper

      sx={{
        margin: "1rem 0",
        padding: "2rem",
      }}
      id="about"
    >
      <Typography variant="h4" sx={{marginBottom : "1rem"}}>About me</Typography>
      <Typography variant="h6" component={"p"}>
        I am George Kimari. A software engineer specializing in creating high
        quality and performant web applications. As a life long learner I am
        always open to new ideas and better ways of doing things. I am always up
        for a challenge. I am currently a freelancer. Reach out via the contact
        form at the bottom of the page or directly via my email
        grgkimari@gmail.com.
      </Typography>
      <Typography
        variant="h4"
        component={"p"}
        sx={{
          margin: "2.5rem auto",
          fontFamily: "'Pacifico', cursive",
        }}
      >
        {"Learning is a treasure that follows its owner everywhere."}
      </Typography>
      <Typography variant="body1">~ Chinese proverb</Typography>
    </Paper>
  );
};

export default About;
