import {
  Box,
  Button,
  Divider,
  FormControl,
  Icon,
  Input,
  InputLabel,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,
  Stack,
  SvgIcon,
  TextareaAutosize,
  TextField,
  Typography,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconPrefix, IconProp } from "@fortawesome/fontawesome-svg-core";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Send } from "@mui/icons-material";

const Contacts = () => {
  return (
    <Paper >
        <Stack spacing={2} sx={{
        display : "grid",
        placeContent : "center"
    }} id="contacts">
        <Typography variant="h5">Contact me</Typography>
      <List>
        <ListItem>
          <ListItemButton href="https://github.com/grgkimari" target={"_blank"}>
            <ListItemIcon>
              <GitHubIcon />
            </ListItemIcon>
            <ListItemText>Github</ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton
            href="https://hackerrank.com/grgkimari"
            target={"_blank"}
          >
            <ListItemIcon>
              <Icon>
                <img alt="hackerrank icon" src="hackerrank.svg"></img>
              </Icon>
            </ListItemIcon>
            <ListItemText>Hackerrank</ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton
            href="https://www.linkedin.com/in/george-kamuyu-4794b9236/"
            target={"_blank"}
          >
            <ListItemIcon>
              <LinkedInIcon />
            </ListItemIcon>
            <ListItemText>Linkedin</ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem>
          <Stack direction={"column"} sx={{
            width : "100%",
            display : "grid",
            placeContent : "center"
          }}>
            <Typography variant="h5">Send me a message</Typography>
            <Typography variant="body2" color="primary">Fields marked * are mandatory</Typography>
          <FormControl fullWidth>
            <InputLabel htmlFor="nameField">Name*</InputLabel>
            <Input id="nameField" type="text"></Input>
          </FormControl>
          <Divider sx={{
            margin: ".5rem"
          }}/>
          <FormControl fullWidth>
            <InputLabel htmlFor="emailField">Email address*</InputLabel>
            <Input id="emailField" type="email"></Input>
          </FormControl>
          <Divider sx={{
            margin: ".5rem"
          }}/>
          <FormControl>
            <InputLabel htmlFor="subjectField">Subject</InputLabel>
            <Input id="subjectField" type="text"></Input>
          </FormControl>
          <Divider sx={{
            margin: ".5rem"
          }}/>
          <FormControl>
            <InputLabel htmlFor="messageField">Message*</InputLabel>
            <TextareaAutosize placeholder="Message" required style={{

                width: "400px",
                height : "300px",
                borderRadius : "15px",
                padding : "5px",
                fontSize : "1.5rem",
                margin :"3rem 0",
                
            }}/>
          </FormControl>
          <Button variant="contained" endIcon={<Send />}>Send</Button>
          </Stack>
        </ListItem>
      </List>
    </Stack>
    </Paper>
  );
};

export default Contacts;
