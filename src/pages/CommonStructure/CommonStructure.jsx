import { Button, Typography } from "@material-ui/core";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
// import { useSelector, useDispatch } from 'react-redux';
import useStyles from "../styles";

const CommonStructure = ({ btns, titleText, children }) => {
  const classes = useStyles();
  const styles =
    btns.length > 1
      ? {
          margin: "1.5rem 0 2rem",
          display: "flex",
          gap: "1.5rem",
        }
      : { margin: "1.5rem 0 2rem" };
  // TODO: add a btns prop
  useEffect(() => {
    console.log("styling by the HOC");
  }, []);
  return (
    <main>
      <div className={classes.gridWrapper}>
        {/*TODO: add titleText prop */}
        <Typography variant="h4">{titleText}</Typography>
        <div style={styles}>
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
        {children}
      </div>
    </main>
  );
};

export default CommonStructure;
