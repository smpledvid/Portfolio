import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fade from 'react-reveal/Fade';
import Avatar from '@material-ui/core/Avatar';
import Tooltip from '@material-ui/core/Tooltip';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';

import ReactLogo from '../../assets/images/ReactLogo.png';
import JavascriptLogo from  '../../assets/images/JavascriptLogo.png';
import AngularLogo from  '../../assets/images/AngularLogo.png';
import TypescriptLogo from  '../../assets/images/TypescriptLogo.png';
import CPPLogo from  '../../assets/images/CPPLogo.png';
import ProfilePic from '../../assets/images/ProfilePic.jpg';
import HTMLLogo from '../../assets/images/HTML5Logo.png';
import CSSLogo from '../../assets/images/CSSLogo.png';

import NodeLogo from  '../../assets/images/NodeJSLogo.png';
import GithubLogo from  '../../assets/images/GithubLogo.png';
import BitBucketLogo from  '../../assets/images/BitBucketLogo.jpg';
import JiraLogo from  '../../assets/images/JiraLogo.png';
import NpmLogo from '../../assets/images/NpmLogo.png';
import MaterialLogo from '../../assets/images/MaterialLogo.png';
import BootstrapLogo from '../../assets/images/BootstrapLogo.png';

import './about.scss';

function About() {
    const listOfSkills = [
        {
            label: 'Javascript',
            image: JavascriptLogo,
            url: 'https://www.javascript.com/'
        },
        {
            label: 'HTML',
            image: HTMLLogo,
            url: 'https://developer.mozilla.org/en-US/docs/Web/HTML'
        },
        {
            label: 'CSS',
            image: CSSLogo,
            url: 'https://developer.mozilla.org/en-US/docs/Web/CSS'
        },
        {
            label: 'React',
            image: ReactLogo,
            url: 'https://reactjs.org/'
        },
        {
            label: 'Angular',
            image: AngularLogo,
            url: 'https://angular.io/'
        },
        {
            label: 'Typescript',
            image: TypescriptLogo,
            url: 'https://www.typescriptlang.org/'
        },
        {
            label: 'C++',
            image: CPPLogo,
            url: 'https://www.cplusplus.com/'
        }
    ];
    const listOfTechnologies = [
        {
            label: 'NodeJS',
            image: NodeLogo,
            url: 'https://nodejs.org/en/'
        },
        {
            label: 'Github',
            image: GithubLogo,
            url: 'https://github.com/'
        },
        {
            label: 'Bitbucket',
            image: BitBucketLogo,
            url: 'https://www.atlassian.com/software/bitbucket'
        },
        {
            label: 'JIRA',
            image: JiraLogo,
            url: 'https://www.atlassian.com/software/jira'
        },
        {
            label: 'npm',
            image: NpmLogo,
            url: 'https://www.npmjs.com/'
        },
        {
            label: 'Material UI',
            image: MaterialLogo,
            url: 'https://material-ui.com/'
        },
        {
            label: 'Bootstrap',
            image: BootstrapLogo,
            url: 'https://getbootstrap.com/'
        }
    ]
    const useStyles = makeStyles((theme) => ({
        skillAvatar: {
            width: '4em',
            height: '4em',
            borderRadius: 'inherit',
            transition: 'transform 0.2s ease-in-out',
            "&:hover" :{
                cursor: 'pointer',
                transform: 'scale(1.3)'
            }
        },
        toolTip: {
            fontSize: '2em'
        }
    }));

    function handleSkillAvatarClick(skillUrl) {
        window.open(skillUrl, '_blank');
    }

    const classes = useStyles();

    return (
        <section className="section-wrapper" id="About">
            <div className="row">
                <div className="col-md-12">
                    <div className={`section-titles ${classes.aboutIcon}`}>
                        <span className="testo"><PersonOutlineIcon className="about-icon"/></span>
                        <span>ABOUT</span>
                    </div>
                </div>
            </div>
            <div className="row avatar-row">
                <div className="col-lg-6 avatar-col">
                    <Fade bottom>
                        <div className="avatar-wrapper">
                            <img src={ProfilePic} alt="avatar"/>
                        </div>
                    </Fade>
                </div>
                <div className="col-lg-6">
                    <Fade bottom>
                        <div className="about-content">
                            <span className="about-intro">I'm <span id="name">David</span>, a Software Engineer based out of Los Angeles, CA.</span>
                            <br/><br/>
                            After graduating from the University of California, Riverside with a Computer Science degree in 2018, I spent the last 2.5 years learning and working on various web applications. My current professional experience consists of working as a Frontend Engineer, but my primary goal is to be proficient throughout the webstack.  
                            <br/><br/>
                            These days I'm spending my time working on side projects, finding new technologies, and learning the best UI/UX design practices.
                            <br/><br/>
                            Outside of work, you'll catch me obsessing over movies, lifting weights and actively seeking the best ice cream parlor.
                        </div>
                    </Fade>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <div className="row skill-chips-row">
                        <div className="skill-chips-container">
                            {listOfSkills.map((skill, labelIndex) => (
                                <span key={labelIndex} className="skill-chip-wrapper">
                                    <Fade bottom delay={labelIndex * 200}>
                                        <Tooltip title={skill.label}>
                                            <Avatar alt="" onClick={() => handleSkillAvatarClick(skill.url)} src={skill.image} id={`skill-avatar-${skill.label}`} className={classes.skillAvatar}/>
                                        </Tooltip>
                                    </Fade>
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <div className="row skill-chips-row">
                        <div className="skill-chips-container">
                            {listOfTechnologies.map((skill, labelIndex) => (
                                <span key={labelIndex} className="skill-chip-wrapper">
                                    <Fade bottom delay={labelIndex * 200}>
                                        <Tooltip title={skill.label}>
                                            <Avatar alt="" onClick={() => handleSkillAvatarClick(skill.url)} src={skill.image} id={`skill-avatar-${skill.label}`} className={classes.skillAvatar}/>
                                        </Tooltip>
                                    </Fade>
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;