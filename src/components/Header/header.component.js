import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';

import AnchorLink from 'react-anchor-link-smooth-scroll';
import Fade from 'react-reveal/Fade';

import MailIcon from '@material-ui/icons/Mail';
import PersonIcon from '@material-ui/icons/Person';
import SettingsIcon from '@material-ui/icons/Settings';
import WorkIcon from '@material-ui/icons/Work';

import './header.scss';

function HideOnScroll(props) {
    const { children, window } = props;
    const trigger = useScrollTrigger({ target: window ? window() : undefined, disableHysteresis: true });
  
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
    },
    button: {
      "&:hover": {
        backgroundColor: 'transparent',
      }
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
                        <div className="header-buttons-container">
                          <Fade bottom>
                            <AnchorLink href='#About' className="header-anchor-link">
                              <Button disableRipple color="inherit" className={classes.button}>
                                <span className="button-content">
                                  <span className="header-label"><PersonIcon className="icons"/></span>
                                  <span className="header-label">ABOUT</span> 
                                  </span>
                              </Button>
                            </AnchorLink>
                          </Fade>
                          <Fade bottom delay={200}>
                            <AnchorLink href='#Projects' className="header-anchor-link">
                              <Button disableRipple color="inherit" className={classes.button}>
                                <span className="button-content">
                                  <span className="header-label"><SettingsIcon className="icons"/></span> 
                                  <span className="header-label">PROJECTS</span>
                                </span>
                              </Button>
                            </AnchorLink>
                          </Fade>
                          <Fade bottom delay={400}>
                            <AnchorLink href='#Experience' className="header-anchor-link">
                              <Button disableRipple color="inherit" className={classes.button}>
                                <span className="button-content">
                                  <span className="header-label"><WorkIcon className="icons"/></span>
                                  <span className="header-label">EXPERIENCE</span>
                                </span>
                              </Button>
                            </AnchorLink>
                          </Fade>
                          <Fade bottom delay={600}>
                            <AnchorLink href='#Contact' className="header-anchor-link">
                              <Button disableRipple color="inherit" className={classes.button}>
                                <span className="button-content">
                                  <span className="header-label"><MailIcon className="icons"/></span>
                                  <span className="header-label">CONTACT</span>
                                </span>
                                </Button>
                            </AnchorLink>
                          </Fade>
                        </div>
                    </Toolbar>
                </AppBar>
            </HideOnScroll>
        </section>
    );
}

export default Header;
