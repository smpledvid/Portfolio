import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';

import AnchorLink from 'react-anchor-link-smooth-scroll'

import './header.scss';

function HideOnScroll(props) {
    const { children, window } = props;
    const trigger = useScrollTrigger({ target: window ? window() : undefined });
  
    return (
      <Slide appear={false} direction="down" in={!trigger}>
        {children}
      </Slide>
    );
}

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    title: {
      flexGrow: 1,
    },
    navigation: {
        alignContent: 'flex-end'
    }
  }));

function Header() {
    const classes = useStyles();

    return (
        <section className={classes.root}>
            <HideOnScroll>
                <AppBar id="appbar">
                    <Toolbar>
                        <Typography variant="h6" className={classes.title}></Typography>
                        <div>
                          <AnchorLink href='#About'>
                            <Button color="inherit"><span className="button-content">About</span></Button>
                          </AnchorLink>
                          <AnchorLink href='#Projects'>
                            <Button color="inherit"><span className="button-content">Projects</span></Button>
                          </AnchorLink>
                          <AnchorLink href='#Experience'>
                            <Button color="inherit"><span className="button-content">Experience</span></Button>
                          </AnchorLink>
                          <AnchorLink href='#Contact'>
                            <Button color="inherit"><span className="button-content">Contact</span></Button>
                          </AnchorLink>
                          
                          
                          
                          
                        </div>
                    </Toolbar>
                </AppBar>
            </HideOnScroll>
        </section>
    );
}

export default Header;
