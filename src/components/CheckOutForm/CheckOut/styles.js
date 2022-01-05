import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  },
  toolbar: theme.mixins.toolbar,
  paper: {
    padding: theme.spacing(2),
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
  divider: {
    margin: '20px 0',
  },
  spinner: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  confirmationWrapper: {
    padding: "1.5rem",
    maxWidth: "600px",
    marginLeft: "auto",
    marginRight: "auto",
  },
  confirmationContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center"
  },
  confirmationBtn: {
    marginLeft: "auto",
    marginRight: "auto",
  }
}));