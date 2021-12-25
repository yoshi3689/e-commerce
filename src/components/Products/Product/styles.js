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
  cardActions: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  cardContent: {
    display: 'flex',
    justifyContent: 'space-between',
  },
}));