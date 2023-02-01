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
}
}}>
                <Typography variant="h4">Project Samples</Typography>
                <ProjectRef name="Password generator" link="https://grgkimari.github.io/password-guru" imagelink="github.svg"/>
                <ProjectRef name="Quote machine" link="https://grgkimari.github.io/quote-machine" imagelink="github.svg"/>
                <ProjectRef name="React calculator" imagelink="github.svg" link="https://grgkimari.github.io/nimble-calculator"/>
                <ProjectRef name="Markdown Previewer" link="https://grgkimari.github.io/markdown-previewer"  imagelink="github.svg"/>
                <ProjectRef name="Pomodoro Timer" link="https://grgkimari.github.io/pomodoro-timer-v2"  imagelink="github.svg"/>
                <ProjectRef name="Beat Maker" link="https://grgkimari.github.io/special-disco"  imagelink="github.svg"/>

            </Paper>

    )
}

export default ProjectsPane