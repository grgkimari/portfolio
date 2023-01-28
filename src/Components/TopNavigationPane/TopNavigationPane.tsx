import { AppBar, Button, Divider, Drawer, IconButton, Link, Stack, Toolbar, Typography } from "@mui/material"
import './TopNavigationPane.css'
import { useState } from "react";
import { Menu } from "@mui/icons-material";

const TopNavigationPane = () => {
    const [drawerOpen, setDrawerOpen] = useState(false)
    const ButtonTheme = {
        '&:hover' : {
            "background" : "gray"
        }
    }
    return (
        <AppBar>
            <Toolbar sx={{
                display: "flex",
                justifyContent : "flex-end"
            }}>
                <Stack component={"span"} spacing={.5} direction="row" sx={{
                    color: "inherit",
                    margin: "0px 15px 0px 0px",
                    position : "absolute",
                    left: 0
                }}>
                    <Typography sx={{
                        fontFamily: "'Pacifico', cursive",
                        fontSize : "1.2rem"
                    }}>{"<"}</Typography>
                    <Typography sx={{
                        fontFamily: "'Agustina Regular', 'Pacifico'",
                        fontSize : "1.2rem"
                    }}>{"George Kimari"}</Typography>
                    <Typography sx={{
                        fontFamily: "'Pacifico', cursive",
                        fontSize : "1.2rem"
                    }}>{"/>"}</Typography>
    
                </Stack>
                <Stack spacing={2} direction="row" component={"span"} sx={{
                    display : {
                        xs : "none",
                        sm: "flex"
                    },
                    justifySelf: "flex-end"
                    
                }}>

                    <Button color={"inherit"} sx={ButtonTheme}>About me</Button>
                    <Button color={"inherit"} sx={ButtonTheme}>Portifolio</Button>
                    <Button color={"inherit"} sx={ButtonTheme}>Contacts</Button>
                </Stack>
                <IconButton onClick={() => setDrawerOpen(true)}>
                    <Menu sx={{
                        color: "white",
                        display : {
                            xs : "flex",
                            sm : "none",
                            md : "none"
                        }
                    }}/>
                </IconButton>
                <Drawer open={drawerOpen} onClose={() => setDrawerOpen(false) } anchor="right">
                    <Stack width={"200px"} sx={{
                        height: "70px",
                        display : "grid",
                        placeContent : "center"
                    }}><Button sx={{
                        width : "200px",
                        height : "50px"
                    }} color={"inherit"}>About me</Button></Stack>
                    <Divider />
                    <Stack width={"200px"} sx={{
                        height: "70px",
                        display : "grid",
                        placeContent : "center"
                    }}><Button sx={{
                        width : "200px",
                        height : "50px"
                    }} color={"inherit"}>Portifolio</Button></Stack>
                    <Divider />
                    <Stack width={"200px"} sx={{
                        height: "70px",
                        display : "grid",
                        placeContent : "center"
                    }}><Button sx={{
                        width : "200px",
                        height : "50px"
                    }} color={"inherit"}>Socials</Button></Stack>
                    <Divider />
                    <Stack width={"200px"} sx={{
                        height: "70px",
                        display : "grid",
                        placeContent : "center"
                    }}><Button sx={{
                        width : "200px",
                        height : "50px"
                    }} color={"inherit"}>Contacts</Button></Stack>
                    <Divider />

                </Drawer>
            </Toolbar>
        </AppBar>
    )
}

export default TopNavigationPane