import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  title: {
    marginTop: '5%',
  },
  emptyButton: {
    minWidth: '150px',
    [theme.breakpoints.down('xs')]: {
      marginBottom: '5px',
    },
    // when greater than 600px, do the following
    [theme.breakpoints.up('sm')]: {
      marginRight: '20px'
    },
  },
  checkoutButton: {
    minWidth: '150px',
  },
  link: {
    textDecoration: 'none',
  },
  cardDetails: {
    display: 'flex',
    marginTop: '10%',
    width: '100%',
    justifyContent: 'space-between',
    [theme.breakpoints.down('xs')]: {
    flexDirection: 'column',
    // justifyContent: 'end'
    },
    // marginLeft: 'auto',
    // marginRight: 'auto',
  },
  btns: {
    //when the vw is less than 600 px, it does the following
    [theme.breakpoints.down('xs')]: {
      marginTop: theme.spacing(2),
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'start'
    },
  }
}));