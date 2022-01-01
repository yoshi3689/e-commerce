import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  root: {
    maxWidth: '100%',
  },
  mediaWrapper : {
    overflow: 'hidden',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9 (whole card : image part)
    transform: 'scale(1)',
  },
  '.MuiCardMedia-root:hover' : {
    transform: 'scale(1.05) !important',
  },
  //somehow i cant do this!!
  // ".MuiCardActionArea-root:hover > *" :{
  //   transform: 'scale(1.05) !important',
  // },
  cardContent: {
    maxHeight: "250px"
  },
  cardContentHeader: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  cardContentBody: {
    display: "-webkit-box",
    WebkitLineClamp: "3",
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
    marginTop: "1rem"
  },
  cardActions: {
    display: 'flex',
    justifyContent: 'space-between',
    paddingLeft: "1rem",
    
  },
}));