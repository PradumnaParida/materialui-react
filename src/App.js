import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { CssBaseline } from "@material-ui/core";
import Header from "./materialsui/Header";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    backgroundImage: `url(${process.env.PUBLIC_URL + "/images/imagee.jpg"})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    textAlign: "center",
  },
  btns: {
    "& > *": {
      margin: theme.spacing(2),
    },
  },
}));

export default function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header />
      <div className={classes.btns}>
        <Button variant="contained" color="primary">
          Home
        </Button>
        <Button variant="contained" color="secondary">
          About Us
        </Button>
        <Button variant="contained">Blog</Button>
        <Button variant="contained" color="primary" href="#contained-buttons">
          Help
        </Button>
      </div>
    </div>
  );
}
