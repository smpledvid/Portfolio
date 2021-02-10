import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Fade from 'react-reveal/Fade';

import './experience.scss';

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        className="tab-panels"
        role="tabpanel"
        hidden={value !== index}
        id={`vertical-tabpanel-${index}`}
        aria-labelledby={`vertical-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3} className="tab-panel-box">
            <Typography>{children}</Typography>
            {/* <div>{children}</div> */}
          </Box>
        )}
      </div>
    );
}
  
TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: 'transparent',
        display: 'flex',
        height: 224,
        marginTop: '10em',
        marginBottom: '10em'
    },
    tabs: {
        borderRight: `1px solid ${theme.palette.divider}`,
    },
    tab: {
        fontSize: '1em',
        fontWeight: 'bold',
    },
    tabIndicator: {
        backgroundColor: 'teal'
    }
}));

function Experience() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <section className="section-wrapper" id="Experience">
            <div className="row">
                <div className="col-md-12">
                    <Fade bottom><div className="section-titles">.experience( )</div></Fade>
                </div>
            </div>
            <div className="row">
                <Fade bottom>
                    <div className={`tabs-container ${classes.root}`}>
                        <Tabs
                            orientation="vertical"
                            variant="fullWidth"
                            value={value}
                            onChange={handleChange}
                            className={classes.tabs}
                            TabIndicatorProps={{ classes: { root: classes.tabIndicator} }}
                            
                        >
                            <Tab className={classes.tab} label="Avanade" {...a11yProps(0)} />
                            <Tab className={classes.tab} label="Ecogate" {...a11yProps(1)} />
                            <Tab className={classes.tab} label="UCR" {...a11yProps(2)} />

                        </Tabs>
                        <TabPanel value={value} index={0}>
                            <div className="tab-panel-wrapper">
                                <div className="header">
                                    <div>
                                        <span className="company-role">Software Engineer @ </span><span className="company-name">Avanade</span>
                                    </div>
                                    <div className="experience-date">
                                        March 2019 - Present
                                    </div>
                                </div>
                                <div className="description">
                                    <ul>
                                        <li>Created a more user friendly web page for Ecogate's clients.</li>
                                        <li>Handled any previous or new bugs that may appear.</li>
                                        <li>Created virtual simulations for Ecogate's machines to help speed up the testing process.</li>
                                        <li>Worked on the backend of Ecogate's user web page to make sure each users's machine appear faster.</li>
                                        <li>Javascript, KnockoutJS, NodeJS, Bootstrap, HTML, CSS, Python, Git</li>
                                    </ul>
                                </div>
                            </div>
                        </TabPanel>
                        <TabPanel value={value} index={1}>
                            <div className="tab-panel-wrapper">
                                <div className="header">
                                    <div>
                                        <span className="company-role">Software Engineer Intern @ </span><span className="company-name">Ecogate</span>
                                    </div>
                                    <div className="experience-date">
                                        June 2017 - Sept 2017
                                    </div>
                                </div>
                                <div className="description">
                                    <ul>
                                        <li>Created a more user friendly web page for Ecogate's clients.</li>
                                        <li>Handled any previous or new bugs that may appear.</li>
                                        <li>Created virtual simulations for Ecogate's machines to help speed up the testing process.</li>
                                        <li>Worked on the backend of Ecogate's user web page to make sure each users's machine appear faster.</li>
                                        <li>Javascript, KnockoutJS, NodeJS, Bootstrap, HTML, CSS, Python, Git</li>
                                    </ul>
                                </div>
                            </div>
                        </TabPanel>
                        <TabPanel value={value} index={2}>
                            <div className="tab-panel-wrapper">
                                <div className="header">
                                    <div>
                                        <span className="company-role">Student @ </span><span className="company-name">University of California Riverside</span>
                                    </div>
                                    <div className="experience-date">
                                        Oct 2014 - June 2018
                                    </div>
                                </div>
                                <div className="description">
                                    <ul>
                                        <li>Created a more user friendly web page for Ecogate's clients.</li>
                                        <li>Handled any previous or new bugs that may appear.</li>
                                        <li>Created virtual simulations for Ecogate's machines to help speed up the testing process.</li>
                                        <li>Worked on the backend of Ecogate's user web page to make sure each users's machine appear faster.</li>
                                        <li>Javascript, KnockoutJS, NodeJS, Bootstrap, HTML, CSS, Python, Git</li>
                                    </ul>
                                </div>
                            </div>
                        </TabPanel>
                    </div>
                </Fade>
            </div>
        </section>
    )
}

export default Experience;