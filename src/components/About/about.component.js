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

import './about.scss';

function About() {
    const listOfSkills = ['Javascript', 'HTML/CSS', 'React', 'Angular', 'Typescript', 'C++'];
    const [skillChipRowBG, setSkillChipRowBG] = useState('')

    const useStyles = makeStyles((theme) => ({
        skillChip : {
            fontWeight: 'bold',
            fontSize: '1em',
            '&:hover': {
                background: "teal",
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
                    <Fade bottom><div className="section-titles">About</div></Fade>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <Fade bottom>
                        <div className="about-content">Hi, My name is David and I'm a recent graduate at the University of California, Riverside. I graduated on June 2018 with a B.S. in Computer Science and I am currently looking for full time opportunities as a Software Engineer. I love working on interactive websites and learning about new technologies!</div>
                    </Fade>
                </div>
                
            </div>
            <div className="row">
                <div className="col-md-12">
                    <Fade bottom><div className="section-titles">Skills</div></Fade>
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
        </section>
    )
}

export default About;