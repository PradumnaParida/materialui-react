import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Collapse } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "50vh",
  },
  title: {
    color: "white",
  },
  appbarTitle2: {
    color: "orange",
  },
}));

export default function Header() {
  const [checked, setChecked] = useState(false);
  const classes = useStyles();
  useEffect(() => {
    setChecked(true);
  }, []);
  return (
    <div className={classes.root}>
      <Collapse in={checked} {...(checked ? { timeout: 10000 } : {})}>
        <div>
          <h1 className={classes.title}>
            Welcome to <br />
            My<span className={classes.appbarTitle2}>Island.</span>
          </h1>
        </div>
      </Collapse>
    </div>
  );
}
