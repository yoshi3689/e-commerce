import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
    //this div's height set above changes from 3 rem to 4rem dep. on the viewport size
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
    [theme.breakpoints.down('sm')]: {
      padding: '1rem 0'
    },
    //the size of the padding is 1.5rem this case, and increments by 0.5rem as the argument integer increases
  },
  root: {
    flexGrow: 1,
  },
}))