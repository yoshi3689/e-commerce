import { makeStyles, alpha } from '@material-ui/core/styles';
//import { BorderBottom } from '@material-ui/icons';

// the below was happening because i was using fade
// Material-UI: The `fade` color utility was renamed to `alpha` to better describe its functionality.
// You should use `import { alpha } from '@material-ui/core/styles'`
const drawerWidth = 0;

// npx browserslist@latest --update-db
export default makeStyles(theme => ({
  toolbar: theme.mixins.toolbar, 
  toolBar2: {
    width: '90%',
    margin: '0 auto'
  },
  appBar:{
    boxShadow:'none',
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
        [theme.breakpoints.up('sm')]: {
          display: 'none',
        },
      },
      grow: {
        flexGrow: 1,
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
      inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
          width: '20ch',
        },
      },
}))
// export default makeStyles((theme) => ({
//   appBar: {
//     boxShadow: 'none',
//     borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
//     [theme.breakpoints.up('sm')]: {
//       width: `calc(100% - ${drawerWidth}px)`,
//       marginLeft: drawerWidth,
//     },
//   },
//   title: {
//     flexGrow: 1,
//     alignItems: 'center',
//     display: 'flex',
//     textDecoration: 'none',
//   },
//   image: {
//     marginRight: '10px',
//   },
//   menuButton: {
//     marginRight: theme.spacing(2),
//     [theme.breakpoints.up('sm')]: {
//       display: 'none',
//     },
//   },
//   grow: {
//     flexGrow: 1,
//   },
//   search: {
//     position: 'relative',
//     borderRadius: theme.shape.borderRadius,
//     backgroundColor: alpha(theme.palette.common.white, 0.15),
//     '&:hover': {
//       backgroundColor: alpha(theme.palette.common.white, 0.25),
//     },
//     marginRight: theme.spacing(2),
//     marginLeft: 0,
//     width: '100%',
//     [theme.breakpoints.up('sm')]: {
//       width: 'auto',
//     },
//   },
//   searchIcon: {
//     padding: theme.spacing(0, 2),
//     height: '100%',
//     position: 'absolute',
//     pointerEvents: 'none',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   inputRoot: {
//     color: 'inherit',
//   },
//   inputInput: {
//     padding: theme.spacing(1, 1, 1, 0),
//     // vertical padding + font size from searchIcon
//     paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
//     transition: theme.transitions.create('width'),
//     width: '100%',
//     [theme.breakpoints.up('md')]: {
//       width: '20ch',
//     },
//   },
// }));