import { createStyles, makeStyles, Theme } from '@material-ui/core';

export const navigationPanelStyles = makeStyles((theme: Theme) =>
  createStyles({
    drawer: {
      width: '23rem',
      flexShrink: 0,
      whiteSpace: 'nowrap',
    },
    open: {
      background: '#17172e',
      width: '23rem',
      border: 'none',
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      overflowX: 'hidden',
    },
    close: {
      background: '#17172e',
      border: 'none',
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      overflowX: 'hidden',
      width: '8.5rem',
    },
  })
);
