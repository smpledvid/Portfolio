import React, { useState } from 'react';
import Chip from '@material-ui/core/Chip';
import { makeStyles } from '@material-ui/core/styles';
import Fade from 'react-reveal/Fade';

import ReactLogo from '../../assets/images/ReactLogo.png';
import JavascriptLogo from  '../../assets/images/JavascriptLogo.png';
import AngularLogo from  '../../assets/images/AngularLogo.png';
import TypescriptLogo from  '../../assets/images/TypescriptLogo.png';
import HtmlCssLogo from  '../../assets/images/HtmlCssLogo.png';
import CPPLogo from  '../../assets/images/CPPLogo.png';
import ProfilePic from '../../assets/images/ProfilePic.jpg';

import './about.scss';

function About() {
    const listOfSkills = ['Javascript', 'HTML/CSS', 'React', 'Angular', 'Typescript', 'C++'];
    const [skillChipRowBG, setSkillChipRowBG] = useState('')

    const useStyles = makeStyles((theme) => ({
        skillChip : {
            fontWeight: 'bold',
            fontSize: '1em',
            transition: 'background 0.2s ease-in',
            '&:hover': {
                background: "#40F99B",
            },
        },
        skillChipRowBg : {
            backgroundImage: `url(${skillChipRowBG})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: 'contain',
        },
    }));

    const classes = useStyles();

    function onSkillChipHover(label) {
        let backgroundImage = '';
        switch(label) {
            case 'React':
                backgroundImage = ReactLogo;
                break;
            case 'Javascript':
                backgroundImage = JavascriptLogo;
                break;
            case 'Angular':
                backgroundImage = AngularLogo;
                break;
            case 'HTML/CSS':
                backgroundImage = HtmlCssLogo;
                break;
            case 'Typescript':
                backgroundImage = TypescriptLogo;
                break;
            case 'C++':
                backgroundImage = CPPLogo;
                break;
            default:
                break;
        }
        setSkillChipRowBG(backgroundImage);
    }

    return (
        <section className="section-wrapper" id="About">
            <div className="row">
                <div className="col-md-12">
                    <Fade bottom><div className="section-titles">about( ) &#123;</div></Fade>
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
                            I'm David, a Software Engineer based out in Los Angeles, CA.
                            <br/><br/>
                            After graduating from the University of California, Riverside with a Computer Science degree in 2018, I spent last 2.5 years learning and working on various web applications. My current professional experience consists of working as a Frontend Engineer, but my primary goal is to be proficient throughout the webstack.  
                            <br/><br/>
                            These days I'm spending my time working on side projects, finding new technologies, and learning the best UI/UX design practices.
                            <br/><br/>
                            Outside of work, you'll catch me obsessing over movies, lifting weights and actively seeking the best ice cream parlor.
                        </div>
                    </Fade>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12" >
                    <div className="section-titles">&#125;</div></div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <Fade bottom><div className="section-titles">skills( ) &#123;</div></Fade>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <div className={`row skill-chips-row  ${classes.skillChipRowBg}`}>
                        <div className="skill-chips-container">
                            {listOfSkills.map((skillLabel, labelIndex) => (
                                <span key={skillLabel} className="skill-chip-wrapper">
                                    <Fade bottom delay={labelIndex * 200}>
                                        <Chip className={classes.skillChip} label={skillLabel} onMouseEnter={() => onSkillChipHover(skillLabel)}></Chip>
                                    </Fade>
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12" >
                    <div className="section-titles">&#125;</div></div>
            </div>
        </section>
    )
}

export default About;