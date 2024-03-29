import { Menu } from "@mui/icons-material";
import {
  AppBar,
  Button,
  Divider,
  Drawer,
  IconButton, Stack,
  Toolbar,
  Typography
} from "@mui/material";
import { useState } from "react";
import "./TopNavigationPane.css";

const TopNavigationPane = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const ButtonTheme = {
    "&:hover": {
      background: "gray",
    },
  };

  return (
    <AppBar>
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          bgcolor: "whitesmoke",
          color: "black",
          borderBottom : "4px solid black"
        }}
      >
        <Stack
          component={"span"}
          spacing={0.5}
          direction="row"
          sx={{
            color: "inherit",
            margin: "0px 15px 0px 0px",
            position: "absolute",
            left: 0,
          }}
        >
          <Typography
            sx={{
              fontFamily: "'Pacifico'",
              fontSize: "1.2rem",
            }}
          >
            {"< George Kimari />"}
          </Typography>
        </Stack>
        <Stack
          spacing={2}
          direction="row"
          component={"span"}
          sx={{
            display: {
              xs: "none",
              sm: "flex",
            },
            justifySelf: "flex-end",
          }}
        >
          <Button color={"inherit"} sx={ButtonTheme} href="/#about">
            About me
          </Button>
          <Button color={"inherit"} sx={ButtonTheme} href="/#projects">
            Projects
          </Button>
          <Button color={"inherit"} sx={ButtonTheme} href="#skills">
            Skills
          </Button>
          <Button color={"inherit"} sx={ButtonTheme} href="#contacts">
            Contacts
          </Button>
        </Stack>
        <IconButton onClick={() => setDrawerOpen(true)}>
          <Menu
            sx={{
              color: "inherit",
              display: {
                xs: "flex",
                sm: "none",
                md: "none",
              },
            }}
          />
        </IconButton>
        <Drawer
          open={drawerOpen}
          onClose={() => setDrawerOpen(false)}
          anchor="right"
        >
          <Stack
            width={"200px"}
            sx={{
              height: "70px",
              display: "grid",
              placeContent: "center",
            }}
          >
            <Button onClick={() => {
              setDrawerOpen(false)
              window.scrollTo(0,650)
            }}>About</Button>
          </Stack>
          <Divider />
          <Stack
            width={"200px"}
            sx={{
              height: "70px",
              display: "grid",
              placeContent: "center",
            }}
          >
            <Button
              sx={{
                width: "200px",
                height: "50px",
              }}
          
              onClick={ () => {
                setDrawerOpen(false)
                window.scrollTo(0, 4280)
              }}
            >
              Projects
            </Button>
          </Stack>
          <Divider />
          <Stack
            width={"200px"}
            sx={{
              height: "70px",
              display: "grid",
              placeContent: "center",
            }}
          >
            <Button
              sx={{
                width: "200px",
                height: "50px",
              }}

              onClick={() => {
                setDrawerOpen(false)
                window.scrollTo(0,1350)
              }}
            >
              Skills
            </Button>
          </Stack>
          <Divider />
          <Stack
            width={"200px"}
            sx={{
              height: "70px",
              display: "grid",
              placeContent: "center",
            }}
          >
            <Button
              sx={{
                width: "200px",
                height: "50px",
              }}
onClick={() => {
  setDrawerOpen(false)
  window.scrollTo(0, 5350)
}}
            >
              Contacts
            </Button>
          </Stack>
          <Divider />
        </Drawer>
      </Toolbar>
    </AppBar>
  );
};

export default TopNavigationPane;
