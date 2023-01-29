import { Avatar, Box, Paper, Stack, Typography } from "@mui/material"

const About = () => {
    return(
        <Stack component={"div"} sx={{
            width : "100%",
            height : "100vh",
            bgcolor : "lightgray",
            marginTop : "60px",
        }}>
            <Paper elevation={3} variant="outlined" sx={{
                display : "flex",
                flexDirection : "column",
                justifyContent : "center",
                alignItems : "center",
                bgcolor: "black"
            }} >
                <Avatar sx={{
                    width: "250px",
                    height : "250px",
        
                }} alt="George's avatar" src="myavatar.png"/>
                <Typography variant="h3" color={"yellow"}>Hello</Typography>
                <Typography variant="h4">I'm George, a software engineer and problem solver.</Typography>
            </Paper>
        </Stack>
    )
}


export default About