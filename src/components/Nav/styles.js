import {
  makeStyles,
  alpha
} from '@material-ui/core/styles';

export default makeStyles(theme => ({
  toolbar: theme.mixins.toolbar,
  toolBar2: {
    width: '90%',
    margin: '0 auto',
    display: "grid",
    gridTemplateColumns: "minmax(max-content, 1fr) 3fr minmax(max-content, 1fr)",
    justifyItems: "center"
  },
  appBar: {
    boxShadow: 'none',
    borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
    // [theme.breakpoints.up('sm')]: {
    //   width: `calc(100% - ${drawerWidth})`,
    //   marginLeft: drawerWidth
    // },
  },
  logoButton: {
    justifySelf: "start"
  },
  title: {
    textAlign: 'center',
    textDecoration: 'none',
    fontWeight: "700",
    color: '#000',
    display: 'inline-block',
  },
  logo: {
    color: "#3f51b5"
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  
}))