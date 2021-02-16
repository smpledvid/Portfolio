import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import AnchorLink from 'react-anchor-link-smooth-scroll';

import { makeStyles } from '@material-ui/core/styles';

import './sidebar.scss';

const drawerWidth = 75;

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
    backgroundColor: '#121F3D',
    border: 'none'
  },
  drawerTextWrapper: {
    textAlign: 'center'
  },
  drawerText: {
    fontWeight: 400,
    fontSize: '1em',
    color: 'white',
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
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
                <AnchorLink href={`#${text}`}>
                    <ListItem button key={text}>
                        <ListItemText className={classes.drawerTextWrapper}>
                            <span className={classes.drawerText}>{text}</span>
                        </ListItemText>
                    </ListItem>
                </AnchorLink>
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
