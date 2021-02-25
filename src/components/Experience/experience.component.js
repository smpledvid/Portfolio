import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import Fade from 'react-reveal/Fade';
import WorkOutlineIcon from '@material-ui/icons/WorkOutline';

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
            <div className="tab-panel-children">{children}</div>
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
        marginTop: '3em',
        marginBottom: '10em'
    },
    tabs: {
        borderRight: `1px solid ${theme.palette.divider}`,
    },
    tab: {
        fontSize: '1em',
        fontWeight: 'bold',
        fontFamily: "'Rubik', sans-seriff",
    },
    tabIndicator: {
        backgroundColor: '#40F99B'
    }
}));

function Experience() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    
    function handleChange(event, newValue) {
        setValue(newValue);
    };

    function companyClick(companyName) {
        console.log(companyName);
        switch(companyName) {
            case 'avanade':
                window.open('https://www.avanade.com/en-us', '_blank');
                break;
            case 'ecogate':
                window.open('https://www.ecogate.com/', '_blank');
                break;
            case 'ucr':
                window.open('https://www.ucr.edu/', '_blank');
                break;
            default:
                break;
          }
    }

    return (
        <section className="section-wrapper" id="Experience">
            <div className="row">
                <div className="col-md-12">
                    <div className="section-titles">
                        <span><WorkOutlineIcon className="experience-icon"/></span>
                        <span>EXPERIENCE</span>
                    </div>
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
                                        <span className="company-role">Software Engineer @ </span><span className="company-name" onClick={() => companyClick('avanade')}>Avanade</span>
                                    </div>
                                    <div className="experience-date">
                                        March 2019 - Present
                                    </div>
                                </div>
                                <div className="description">
                                    <ul>
                                        <li>Designed the architecture of the front-end web application by researching technologies and identifying and learning best practices.</li>
                                        <li>Developed interactive modular components that can be reused throughout the web application in Angular/React.</li>
                                        <li>Produced practical and dynamic web pages by translating UI/UX wireframes into code with HTML/CSS.</li>
                                        <li>Conducted unit testing for every story through Jasmine &#38; Karma for Angular and Jest for React.</li>
                                        <li>Worked alongside Backend Developers to ensure the front end application communicates with the database.</li>
                                        <li>Implemented custom REST APIs in C# for the front end to communicate with the database.</li>
                                    </ul>
                                </div>
                            </div>
                        </TabPanel>
                        <TabPanel value={value} index={1}>
                            <div className="tab-panel-wrapper">
                                <div className="header">
                                    <div>
                                        <span className="company-role">Software Engr. Intern @ </span><span className="company-name" onClick={() => companyClick('ecogate')}>Ecogate</span>
                                    </div>
                                    <div className="experience-date">
                                        Jun 2017 - Sept 2017
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
                                        <span className="company-role">Student @ </span><span className="company-name" onClick={() => companyClick('ucr')}>University of California Riverside</span>
                                    </div>
                                    <div className="experience-date">
                                        Oct 2014 - June 2018
                                    </div>
                                </div>
                                <div className="description">
                                    <ul>
                                        <li>B.S. in Computer Science (Cum Laude) / GPA: 3.61</li>
                                        <li>Course work included but not exclusive to: Software Development, Databases, Data Structures &#38; Algorithms, Machine Learning &#38; Data Mining  </li>
                                        <li>Built a recipe mobile (iOS) application for my senior project with a team of students called Cookpad which ended up 2nd place in the class.</li>
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