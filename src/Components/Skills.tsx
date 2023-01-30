import {
  createTheme,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Link,
  Paper,
  Stack,
} from "@mui/material";
import HtmlIcon from "@mui/icons-material/Html";
import CssIcon from "@mui/icons-material/Css";
import { Javascript } from "@mui/icons-material";

const Skills = () => {
  const ImageTheme = createTheme({});
  return (
    <Paper>
      <Link href="https://github.com/grgkimari">
        <ImageList cols={4}>
          <ImageListItem title="HTML">
            <ImageListItemBar title="HTML" />
            <img
              alt="HTML icon"
              src="https://cdn-icons-png.flaticon.com/128/919/919827.png"
            />
          </ImageListItem>
          <ImageListItem>
            <ImageListItemBar title="CSS" />
            <img
              alt="CSS icon"
              src="https://cdn-icons-png.flaticon.com/128/919/919826.png"
            />
          </ImageListItem>
          <ImageListItem>
            <ImageListItemBar title="JavaScript" />
            <img
              alt="JavaScript icon"
              src="https://cdn-icons-png.flaticon.com/128/5968/5968292.png"
            />
          </ImageListItem>
          <ImageListItem>
            <ImageListItemBar title="React JS" />
            <img
              alt="ReactJS icon"
              src="https://cdn-icons-png.flaticon.com/128/1183/1183672.png"
            />
          </ImageListItem>
          <ImageListItem>
            <ImageListItemBar title="TypeScript" />
            <img
              alt="TypeScript icon"
              src="https://cdn-icons-png.flaticon.com/128/5968/5968381.png"
            />
          </ImageListItem>
          <ImageListItem>
            <ImageListItemBar title="Node JS" />
            <img
              alt="NodeJS icon"
              src="https://cdn-icons-png.flaticon.com/128/919/919825.png"
            />
          </ImageListItem>
          <ImageListItem>
            <ImageListItemBar title="Next JS" />
            <img
              alt="NextJS icon"
              src="https://img.icons8.com/color/512/nextjs.png"
            />
          </ImageListItem>
          <ImageListItem>
            <ImageListItemBar title="Python" />
            <img
              alt="Python icon"
              src="https://cdn-icons-png.flaticon.com/128/5968/5968350.png"
            />
          </ImageListItem>
        </ImageList>
      </Link>
    </Paper>
  );
};

export default Skills;
