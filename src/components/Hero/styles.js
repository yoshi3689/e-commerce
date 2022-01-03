import { makeStyles, alpha } from '@material-ui/core/styles';

export default makeStyles(theme => ({
  wrapper: {
    position: "relative",
    width: "100%",
    height: "95vh",
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: "5rem"
  },
  backgroundImg: {
    position: "absolute",
    top: "0",
    left: "0",
    right: "0",
    bottom: "0",
    width: "100%",
    height: "100%",
  },
  containerWrapper: {
    position: 'relative',
    width: "100%",
    height: "100%",
    background: "rgba(200, 200, 200 ,0.7)"
  },
  container: {
    height: "100%",
    width: "90%"
  },
  content: {
    height: "100%"
  },
  headingContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem"
  },
  btnContainer: {
    display: "flex",
    gap: "2rem",
    margin: "0 auto"
  }
}))