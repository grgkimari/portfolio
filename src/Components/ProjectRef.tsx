import { Button, Paper, Typography } from "@mui/material"
import { ProjectRefProps } from "../types"
import VisibilityIcon from '@mui/icons-material/Visibility';

const ProjectRef = (props : ProjectRefProps) => {
    return(
        <Paper sx={{
            width : "250px",
            height : "250px"
        }}>
            <Typography variant="body1" component="h4">{props.name}</Typography>
            <img alt={props.name + " image"} src={props.imagelink}/>
            <Button variant="contained" href={props.link} endIcon={<VisibilityIcon />}>View</Button>
        </Paper>
    )
}

export default ProjectRef