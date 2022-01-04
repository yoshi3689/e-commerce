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
    paddingTop: '56.25%',
    [theme.breakpoints.up('md')]: {
      paddingRight: '56.25%',
    }
  },
  content: {
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
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
  },
  
}))