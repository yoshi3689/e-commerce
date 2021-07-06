import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  media: {
    height: 260,
  },
  cardContent: {
    display: 'flex',
    justifyContent: 'space-between',
    //for CardContent,there is 1 rem of default padding 
    padding: theme.spacing(3),
    [theme.breakpoints.down('xs')]: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2)
      },
  },
  cartActions: {
    justifyContent: 'space-between',
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(1)
    },
    smallBtn: {
      minWidth: '48px'
    }
  },
  buttons: {
    display: 'flex',
    alignItems: 'center',
  },
}));