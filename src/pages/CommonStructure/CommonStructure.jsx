import { Button, Typography } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import useStyles from "../styles";

const CommonStructure = ({ btns, titleText, children }) => {
  const classes = useStyles();

  return (
    <section className={classes.sectionContainer}>
      <div className={classes.wrapper}>
      <Typography variant="h4">{titleText}</Typography>
        <div className={classes.btnContainer}>
          {btns.map((btn) => (
            <Button
              size="medium"
              type="button"
              variant="contained"
              component={Link}
              to={btn.link}
              key={btn.btnText}
            >
              {btn.btnText}
            </Button>
          ))}
        </div>
        </div>
      {children}
    </section>
  );
};

export default CommonStructure;
