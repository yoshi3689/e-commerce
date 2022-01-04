import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
  menuContainer: {
    flexGrow: 1,
  },
  menuWrapper: {
    display: "flex",
    flexDirection: "row",
  },
  menuItemWrapper: {
    alignItems: "center",
    color: "black",
    gap: "0.5rem"
  },
  mobileMenuItem: {
    textAlign: "left",
    width: "200px",
    paddingLeft: "1.5rem",
    paddingRight: "1.5rem",
    display: "flex",
    justifyContent: "space-between"
  },
  buttons: {
    justifySelf: "end"
  }
}));