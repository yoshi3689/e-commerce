import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  wrapper: {
    [theme.breakpoints.down('sm')]: {
      display:"flex",
      flexDirection: "column",
      alignItems: "center"
    },
  },
  btnContainer: {
    margin: "1.5rem 0 2rem",
    display: "flex",
    gap: "1.5rem",
  }
}))