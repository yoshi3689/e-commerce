import { Button, Typography, Container } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import useStyles from "./styles";

const SectionWrapper = ({ btns, titleText, children }) => {
  const classes = useStyles();

  return (
    <Container component={"section"} maxWidth="lg" className={classes.sectionContainer}>
      <div className={classes.wrapper}>
      <Typography variant="h4">{titleText}</Typography>
        <div className={classes.btnContainer}>
          {btns && btns.map((btn) => (
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
    </Container>
  );
};

export default SectionWrapper;
