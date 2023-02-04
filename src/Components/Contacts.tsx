import { Send } from "@mui/icons-material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import {
  Button,
  Divider,
  FormControl,
  Icon,
  Input,
  InputLabel,
  List,
  ListItem, ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,
  Stack, TextareaAutosize, Typography
} from "@mui/material";
import { ChangeEvent, useState } from "react";
import { FormStateType } from "../types";

const Contacts = () => {

  const [state, setState] = useState<FormStateType>({
    name : null,
    email : null,
    subject : "",
    message : ""
  })

  return (
    <Paper>
      <Stack
        spacing={2}
        sx={{
          display: "grid",
          placeContent: "center",
        }}
        id="contacts"
      >
        <Typography variant="h5">Contact me</Typography>
        <List>
          <ListItem>
            <ListItemButton
              href="https://github.com/grgkimari"
              target={"_blank"}
            >
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
            <Stack
              direction={"column"}
              sx={{
                width: "100%",
                display: "grid",
                placeContent: "center",
              }}
            >
              <Typography variant="h5">Send me a message</Typography>
              <Typography variant="body2" color="primary">
                Fields marked * are mandatory
              </Typography>
              <form>
              <FormControl fullWidth>
                <InputLabel htmlFor="nameField">Name*</InputLabel>
                <Input id="nameField" type="text" value={state.name ? state.name : ""} onChange={(event : ChangeEvent<HTMLInputElement> )=>{

                  setState({
                    ...state,
                    name : event.target.value
                  })
                }}></Input>
              </FormControl>
              <Divider
                sx={{
                  margin: ".5rem",
                }}
              />
              <FormControl fullWidth>
                <InputLabel htmlFor="emailField">Email address*</InputLabel>
                <Input id="emailField" type="email" onChange={(event : ChangeEvent<HTMLInputElement | HTMLTextAreaElement> )=>{

setState({
  ...state,
  email :  event.target.value
})
}} value={state.email ? state.email : ""}></Input>
              </FormControl>
              <Divider
                sx={{
                  margin: ".5rem",
                }}
              />
              <FormControl>
                <InputLabel htmlFor="subjectField">Subject</InputLabel>
                <Input id="subjectField" type="text" onChange={(event : ChangeEvent<HTMLInputElement> )=>{

setState({
  ...state,
  subject : event.target.value
})
}} value={state.subject}></Input>
              </FormControl>
              <Divider
                sx={{
                  margin: ".5rem",
                  width: "100%"
                }}
              />
              <FormControl>
                <InputLabel htmlFor="messageField" >Message*</InputLabel>
                <TextareaAutosize
                
                  placeholder="Message"
                  required
                  style={{
                    width: "100%",
                    height: "300px",
                    borderRadius: "15px",
                    padding: "5px",
                    fontSize: "1.5rem",
                    margin: "3rem 0",
                  }}
                  onChange={(event : ChangeEvent<HTMLTextAreaElement> )=>{

                    setState({
                      ...state,
                      message : event.target.value
                    })
                    }}
                    value={state.message}
                />
              </FormControl>
              <Button
                type="submit"
                variant="contained"
                endIcon={<Send />}
href={`mailto:grgkimari@gmail.com?subject=${state.subject}&body=Hello. I am ${state.name} \n\n${state.message}`}
              fullWidth>
                Send
              </Button>
              </form>
            </Stack>
          </ListItem>
        </List>
      </Stack>
    </Paper>
  );
};

export default Contacts;
