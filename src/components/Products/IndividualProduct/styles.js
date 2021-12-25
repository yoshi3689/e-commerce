import { makeStyles } from "@material-ui/core/styles"

export default makeStyles((theme) => ({
  split: {
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      flexDirection: 'row',
    }
  },
  media: {
    height: 0,
    // paddingTop: '56.25%',  16:9 (whole card : image part)
    paddingTop: '56.25%',
    [theme.breakpoints.up('md')]: {
      // paddingRight: '80%'
      paddingRight: '56.25%',
      // paddingTop: '80.65%',
    }
  },
  content: {
    [theme.breakpoints.up('md')]: {
      // paddingBlock: theme.spacing(10) ,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-around'
    }
  },
  contentItem: {
    paddingBottom : theme.spacing(5),
  },
  flexContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  quantityControl: {
    display: 'flex',
    alignItems: 'center'
  }
  
}))