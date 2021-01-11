import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles, useTheme } from '@material-ui/core/styles';

import './sidebar.scss';

const drawerWidth = 100;

const useStyles = makeStyles((theme) => ({
  drawer: {
    [theme.breakpoints.up('sm')]: {
        width: drawerWidth,
        flexShrink: 1,
    },
  },
  drawerPaper: {
    width: drawerWidth,
    justifyContent: 'center',
    backgroundColor: 'transparent',
    border: 'none'
  },
  drawerTextWrapper: {
    textAlign: 'center'
  },
  drawerText: {
    fontWeight: 'bold',
    fontSize: '1.3em',
    color: '#3B3B3B',
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"
  }
}));

function Sidebar(props) {
    const { window } = props;
    const classes = useStyles();
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const drawer = (
        <div>
            <div className={classes.toolbar} />
            <List>
                {['About', 'Projects', 'Experience', 'Contact'].map((text, index) => (
                <ListItem button key={text}>
                    {/* <ListItemIcon>{text}</ListItemIcon> */}
                    <ListItemText className={classes.drawerTextWrapper}>
                        <span className={classes.drawerText}>{text}</span>
                    </ListItemText>
                </ListItem>
                ))}
            </List>
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <section>
            <nav className={classes.drawer}>
                <Hidden smUp implementation="css">
                    <Drawer
                        container={container}
                        anchor={'left'}
                        open={mobileOpen}
                        classes={{
                        paper: classes.drawerPaper,
                        }}
                        ModalProps={{
                            keepMounted: true,
                        }}
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
                <Hidden xsDown implementation="css">
                    <Drawer
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        variant="permanent"
                        open
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
            </nav>
        </section>
    )
}

export default Sidebar;
