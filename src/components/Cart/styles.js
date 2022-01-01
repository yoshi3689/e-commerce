import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  gridContainer: {
    justifyContent: "center"
  },
  title: {
    marginBottom: "2rem",
    [theme.breakpoints.down('sm')]: {
      textAlign: "center"
      },
  },
  link: {
    textDecoration: 'none',
  },
  cardDetails: {
    display: 'flex',
    marginTop: '10%',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: "center",
    [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    gap: "1rem"
    },
  },
  btns: {
    //when the vw is less than 600 px, it does the following
      margin: theme.spacing(2),
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      gap: "1.5rem"
  },
  emptyButton: {
    minWidth: '150px',
    // when greater than 600px, do the following
    [theme.breakpoints.up('sm')]: {
      marginRight: '20px'
    },
  },
  checkoutButton: {
    minWidth: '150px',
  },
}));