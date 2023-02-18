import { ExpandLess, ExpandMore } from "@mui/icons-material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Collapse, Typography } from "@mui/material";
import { useState } from "react";
import { ProjectRefProps } from "../types";

const ProjectRef = (props: ProjectRefProps) => {
  const [expanded, setExpanded] = useState<boolean>(false)

const handleClick = () => {
  setExpanded(!expanded)
}

  return (
    <Card
    variant="outlined"
    sx={{
      maxWidth : 345
    }}
    >
      <CardActionArea>
      
      <CardMedia
      component={"img"}
      width = "100%"
      height={"200px"}
      alt={props.name + " image"} src={props.imagelink}
      ></CardMedia>
      <Typography gutterBottom variant="body1" component="h4">
        {props.name}
      </Typography>
</CardActionArea>
<CardActions  sx={{
        display : "flex",
        justifyContent : "space-evenly",
        alignItems : "flex-end",
        paddingBottom: "10px",
        margin : "0px",
      }} >
      <Button
        variant="contained"
        href={props.link}
        target="_blank"
        endIcon={<VisibilityIcon />}
        sx={{
          marginTop: "2rem",
        }}
      >
        View
      </Button>
      {expanded ? <ExpandLess onClick={handleClick} sx={{
        transform : "scale(1.5)",
        ":hover" : {
          color : "red"
        }
      }}/> : <ExpandMore onClick={handleClick} sx={{
        transform : "scale(1.5)",
        ":hover" : {
          color : "green"
        }
      }} />}
      </CardActions>
      <Collapse in={expanded}>
      <CardContent>
        <Typography variant="body1">
        {props.description}
        </Typography>
      </CardContent>
      </Collapse>
    </Card>
  );
};

export default ProjectRef;
