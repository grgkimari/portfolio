import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Paper,
  Typography,
} from "@mui/material";

const cardStyles = `.card-styles {
  min-height : 300px;
  padding-top : 12px;
}`

const Skills = () => {
  return (
    <Paper
      sx={{
        backgroundColor: "lightgray",
        padding: "0.5rem",
        margin: "1rem auto",
      }}
    >
      <Typography id="skills" variant="h5" component={"h3"}>
        Tech Stack
      </Typography>

      <Grid container xs={12} spacing={2}>
        <style type="text/css">{cardStyles}</style>
        <Grid item xs={12} md={6} lg={4} >
      <Card variant="outlined" className="card-styles">
        <CardMedia>
          <img
            alt="HTML icon"
            src="https://cdn-icons-png.flaticon.com/128/919/919827.png"
          />
        </CardMedia>
        <CardContent>
          <Typography>
            I use HTML to create and structure the content of web pages. I write
            HTML code using various tags and attributes to define the elements
            of the page, such as headings, paragraphs, images, links, and forms.
            HTML also allows me to create the layout of the page by using
            structural elements like divs and tables.{" "}
          </Typography>
        </CardContent>
      </Card>
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
      <Card variant="outlined"  className="card-styles">
        <CardMedia>
          <img
            alt="CSS icon"
            src="https://cdn-icons-png.flaticon.com/128/919/919826.png"
          />
        </CardMedia>
        <CardContent>
          <Typography>
            I use CSS to control
            the visual appearance of web pages. I use CSS to define styles for
            various HTML elements, such as fonts, colors, layout, and
            positioning. CSS allows me to separate the presentation of a web
            page from its content, making it easier to maintain and update the
            site.
          </Typography>
        </CardContent>
      </Card>
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
      <Card variant="outlined"  className="card-styles">
        <CardMedia>
          <img
            alt="JavaScript icon"
            src="https://cdn-icons-png.flaticon.com/128/5968/5968292.png"
          />
        </CardMedia>
        <CardContent>
          <Typography>
            I use JavaScript to add interactivity and functionality to web
            pages. I also use JavaScript to interact with web APIs, allowing me
            to retrieve data and update web pages in real-time.{" "}
          </Typography>
        </CardContent>
      </Card>
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
      <Card variant="outlined"  className="card-styles">
        <CardMedia>
          <img
            alt="ReactJS icon"
            src="https://cdn-icons-png.flaticon.com/128/1183/1183672.png"
          />
        </CardMedia>
        <CardContent>
          <Typography>
            I use React JS to build dynamic user interfaces for web
            applications. I also use React JS to create responsive web
            applications and complex user interfaces that can be updated in
            real-time without reloading the entire page.
          </Typography>{" "}
        </CardContent>
      </Card>
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
      <Card variant="outlined"  className="card-styles">
        <CardMedia>
          <img
            alt="TypeScript icon"
            src="https://cdn-icons-png.flaticon.com/128/5968/5968381.png"
          />
        </CardMedia>
        <CardContent>
          <Typography>
            I use TypeScript to add static typing to JavaScript and improve the
            reliability and maintainability of my code.By using TypeScript, I
            can catch errors at compile time rather than at runtime, which helps
            me to avoid bugs and make my code more robust.
          </Typography>
        </CardContent>
      </Card>
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
      <Card variant="outlined"  className="card-styles">
        <CardMedia>
          <img
          width={"128px"}
            alt="NextJS icon"
            src="https://th.bing.com/th?id=OIP.1aFi53EQSwc0E8gqX7K9dAAAAA&w=150&h=150&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
          />
        </CardMedia>
        <CardContent>
          <Typography>
            I use NextJS to build server-side rendered React applications.With
            NextJS, I can render web pages on the server-side, which reduces the
            time to first paint and makes the web application more SEO-friendly.
          </Typography>
        </CardContent>
      </Card>
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
      <Card variant="outlined"  className="card-styles">
        <CardMedia>
          <img
            alt="NodeJS icon"
            src="https://cdn-icons-png.flaticon.com/128/919/919825.png"
          />
        </CardMedia>
        <CardContent>
          <Typography>
          I use Node JS to build server-side applications and APIs using JavaScript.I create scalable and high-performance web applications that can handle a large number of concurrent connections. Node JS provides a non-blocking, event-driven I/O model that makes it efficient and suitable for building real-time web applications and APIs.
          </Typography>
        </CardContent>
      </Card>
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
      <Card variant="outlined"  className="card-styles">
        <CardMedia>
        <img
            alt="Python icon"
            src="https://cdn-icons-png.flaticon.com/128/5968/5968350.png"
          />
        </CardMedia>
        <CardContent>
          <Typography>
          With Python, I can easily create server-side scripts, handle HTTP requests, and manage databases.          </Typography>
        </CardContent>
      </Card>
      </Grid>
      </Grid>
    </Paper>
  );
};

export default Skills;
