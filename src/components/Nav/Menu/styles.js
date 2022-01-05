import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
  menuContainer: {
    flexGrow: 1,
  },
  icon: {
    color: "#3f51b5"
  },
  menuWrapper: {
    width: "100%",
    [theme.breakpoints.up("md")]: {
      gap: "2rem"
    }
  },
  menuItemWrapper: {
    color: "black",
    gap: "0.5rem"
  },
  mobileMenuItem: {
    textAlign: "center",
    paddingLeft: "1.5rem",
    paddingRight: "1.5rem",
    display: "flex",
    justifyContent: "flex-end"
  },
  buttons: {
    justifySelf: "end"
  }
}));