import VisibilityIcon from "@mui/icons-material/Visibility";
import { Button, Paper, Typography } from "@mui/material";
import { ProjectRefProps } from "../types";

const ProjectRef = (props: ProjectRefProps) => {
  return (
    <Paper

      sx={{
        width: "250px",
        height: "250px",
        margin: {
          xs: "2.5rem auto",
          sm: "auto 0.25rem",
        },
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        border : "1px solid #7fa0ab",
        backgroundColor : "#c6ade6"
      }}
    >
      <Typography variant="body1" component="h4">
        {props.name}
      </Typography>
      <img width={"150px"} alt={props.name + " image"} src={props.imagelink} />
      <Button
        variant="contained"
        href={props.link}
        endIcon={<VisibilityIcon />}
        sx={{
          marginTop: "2rem",
        }}
      >
        View
      </Button>
    </Paper>
  );
};

export default ProjectRef;
