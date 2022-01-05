import React from 'react'
import { Link } from "react-router-dom";
import { Paper, Container, Typography, Grid, Button, Box } from '@material-ui/core'
import useStyles from "./styles"

const Hero = ({ imgSrc }) => {
  const classes = useStyles();
  return (
      <Paper component={"section"} className={classes.wrapper}>
      <img className={classes.backgroundImg} src={imgSrc} alt={imgSrc} />
      <div className={classes.containerWrapper}>
        <Container className={classes.container}  maxWidth="md" >
          <Grid container className={classes.content} justifyContent='space-between' alignItems='center' >
            <Grid item>
              <Box className={classes.headingContainer}>
                <Typography component="h3" className={classes.headingPrimary} variant="h3">Famous brand products at affordable prices</Typography>
                <Typography component="p" variant="h4">Winter Sale. Up to 60% off</Typography>
              </Box>
            </Grid>
            <Grid item>
              <Box className={classes.btnContainer} my={2}>
                <Button component={Link} to={"/categories/discounted"} size="large" type="button" variant="contained" color="primary">Shop Discounted Products</Button>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </div>
    </Paper>
  )
}

export default Hero
