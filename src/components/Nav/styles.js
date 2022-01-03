import {
  makeStyles,
  alpha
} from '@material-ui/core/styles';
const drawerWidth = 0;

// npx browserslist@latest --update-db
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
    [theme.breakpoints.up('sm')]: {
      //brekpoints are basically media queries that can be set within each class
      //.up || .down means min-width || max-width
      //the letters in the () represents the size of your vw
      // xs: 0-600, sm:600-960, md: 960-1280, lg: 1280-1960
      width: `calc(100% - ${drawerWidth})`,
      marginLeft: drawerWidth
    },
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
    color: "green"
  },
  menuButton: {
    marginRight: theme.spacing(2),
    // [theme.breakpoints.up('sm')]: {
    //   display: 'none',
    // },
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
}))