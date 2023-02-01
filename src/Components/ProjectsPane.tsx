import { ImageList, Paper, Stack, Typography } from "@mui/material"
import ProjectRef from "./ProjectRef"

const ProjectsPane = () => {
    return(

            <Paper elevation={3}  sx={{
width: "100%",
display : "flex",
flexDirection : {
    xs : "column",
    md: "row"
},

padding : "1.5rem 0",
backgroundColor : "lightblue"
}} id="projects">
                <Typography variant="h6" component="div" sx={{
                    display : "grid",
                    placeContent : "center",
                    
                }}>Project Samples</Typography>
                <ProjectRef name="Password generator" link="https://grgkimari.github.io/password-guru" imagelink="github.jpg"/>
                <ProjectRef name="Quote machine" link="https://grgkimari.github.io/quote-machine" imagelink="github.jpg"/>
                <ProjectRef name="React calculator" imagelink="github.jpg" link="https://grgkimari.github.io/nimble-calculator"/>
                <ProjectRef name="Markdown Previewer" link="https://grgkimari.github.io/markdown-previewer"  imagelink="github.jpg"/>
                <ProjectRef name="Pomodoro Timer" link="https://grgkimari.github.io/pomodoro-timer-v2"  imagelink="github.jpg"/>
                <ProjectRef name="Beat Maker" link="https://grgkimari.github.io/special-disco"  imagelink="github.jpg"/>

            </Paper>

    )
}

export default ProjectsPane