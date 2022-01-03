import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  sectionContainer: {
    width: "90%",
    margin: "0 auto"
  },
  wrapper: {
    marginTop: "2rem",
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