import React from 'react'
import { Paper, Container, Typography, Grid, ThemeProvider, createTheme, Button, Box } from '@material-ui/core'
import useStyles from "./styles"

// const darkTheme = createTheme({
//   palette : {
//     type: "light"
//   }
// })
const Hero = ({ imgSrc }) => {
  const classes = useStyles();
  return (
      <Paper component={"section"} className={classes.wrapper}>
      <img className={classes.backgroundImg} src={imgSrc} alt={imgSrc} />
      <div className={classes.containerWrapper}>
        <Container className={classes.container}  maxWidth="md" >
          <Grid container className={classes.content} justifyContent='spaceBetween' alignItems='center' >
            <Grid item>
              <Box className={classes.headingContainer}>
                <Typography component="h3" variant="h3">All the brand products you know for affordable prices</Typography>
                <Typography component="p" variant="h4">Winter sale is ongoing, all items 20% off</Typography>
              </Box>
            </Grid>
            <Grid item>
              <Box className={classes.btnContainer} my={2}>
                <Button size="large" type="button" variant="contained" color="primary">Shop Now</Button>
                <Button size="large" type="button" variant="contained" color="primary">Shop featured items</Button>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </div>
    </Paper>
  )
}

export default Hero
