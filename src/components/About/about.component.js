import React, { useState } from 'react';
import Chip from '@material-ui/core/Chip';
import { makeStyles } from '@material-ui/core/styles';
import Fade from 'react-reveal/Fade';
import Avatar from '@material-ui/core/Avatar';
import Tooltip from '@material-ui/core/Tooltip';

import ReactLogo from '../../assets/images/ReactLogo.png';
import JavascriptLogo from  '../../assets/images/JavascriptLogo.png';
import AngularLogo from  '../../assets/images/AngularLogo.png';
import TypescriptLogo from  '../../assets/images/TypescriptLogo.png';
import CPPLogo from  '../../assets/images/CPPLogo.png';
import ProfilePic from '../../assets/images/ProfilePic.jpg';
import HTMLLogo from '../../assets/images/HTML5Logo.png';
import CSSLogo from '../../assets/images/CSSLogo.png';

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

    const useStyles = makeStyles((theme) => ({
        skillAvatar: {
            width: '4em',
            height: '4em',
            borderRadius: 'inherit',
            "&:hover" :{
                cursor: 'pointer'
            }
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
                    <Fade bottom><div className="section-titles">ABOUT</div></Fade>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-6 avatar-col">
                    <div className="avatar-wrapper">
                        <img src={ProfilePic} alt="avatar"/>
                    </div>
                </div>
                <div className="col-lg-6">
                    <Fade bottom>
                        <div className="about-content">
                            I'm David, a Software Engineer based out of Los Angeles, CA.
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
                                            <Avatar alt="" onClick={() => handleSkillAvatarClick(skill.url)} src={skill.image} className={`skill-avatar-${skill.label} ${classes.skillAvatar}`}/>
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