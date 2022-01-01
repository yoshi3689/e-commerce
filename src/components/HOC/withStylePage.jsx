import { Button, Typography } from '@material-ui/core';
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
// import { useSelector, useDispatch } from 'react-redux';
import { useStyles } from '../../pages';


const withFetchStyles = (WrappedComponent) => ({ ...props }) => {
  const classes = useStyles();
  // TODO: add a bttonQua prop
  const styles = props.btns.length > 1 ? 
  {
    margin: "1.5rem 0 2rem", 
    display: "flex",
    gap: "1.5rem"
  }
  : {margin: "1.5rem 0 2rem",}
 ;

 // TODO: add a btns prop
 const btns = props.btns.map(btn => (
    <Button size="medium" type="button" variant="contained" component={Link} to={btn.link} >{btn.btnText}</Button>
    )
  );
  useEffect(() => {
    console.log("styling by the HOC");
  }, []);
  return (
    <main>
      <div className={classes.gridWrapper}>
        {/*TODO: add titleText prop */}
        <Typography variant="h4" >{props.titleText}</Typography>
        <div style={styles}>
          {btns}
        </div>
        <WrappedComponent {...props} />
      </div>
    </main>  
  )

}

export default withFetchStyles

