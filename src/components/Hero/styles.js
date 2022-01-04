import { makeStyles } from '@material-ui/core/styles';

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
    objectFit: "cover",
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
    background: "rgba(180, 180, 180 ,0.5)"
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
  headingPrimary: {
    fontWeight: "700"
  },
  btnContainer: {
    display: "flex",
    gap: "2rem",
    margin: "0 auto"
  }
}))