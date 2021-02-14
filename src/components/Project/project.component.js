import { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Dialog from '@material-ui/core/Dialog';


import './project.scss';
import CorgiImage from '../../assets/images/CORGI.jpg';
import {ReactComponent as GithubIcon} from '../../assets/images/GithubIcon.svg';
import {ReactComponent as ExternalIcon} from '../../assets/images/ExternalIcon.svg';

const useStyles = makeStyles((theme) => ({
    card: {
        display: 'flex',
        margin: '0 auto',
        width: '35em',
        height: '20em',
        transition: 'background 0.5s ease-out',
        '&:hover': {
            cursor: 'pointer',
        },
    },
    dialog: {
        overflowX: 'hidden',
        overflowY: 'hidden'
    },
    dialogImage: {
        // width: '50%'
    },
    dialogDescriptionCard: {
        padding: '1em',
        backgroundColor: '#F9A620',
        color: 'white'
    },
    dialogDescription: {
        // width: '50%'
    },
    
    image: {
        maxWidth: '100%',
        maxHeight: '100%'
    },
    cover: {
        width: '100%',
        transition: 'all .5s',
        '&:hover': {
            transform: 'scale(1.2)',
            opacity: 0.5,
        },
    },
}));

function Project(props) {
    const [dialogIsOpen, setDialogIsOpen] = useState(false);
    const [dialogTitle, setDialogTitle] = useState('');
    const [dialogDescription, setDialogDescription] = useState('');
    const [projectTechnology, setProjectTechs] = useState([]);
    const classes = useStyles();
 
    function toggleProjectDialog() {
        // Mocking Data
        setDialogTitle('The Ultimate Corgi');
        setDialogDescription('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed dot dolore magna aliqua. Ut enim sed do eiusmod tempor incididunt ut labore et dolore  magna ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.');
        setProjectTechs(['React', 'Javascript', 'HTML/CSS']);

        setDialogIsOpen(!dialogIsOpen);
    }

    return (
        <section className='project-wrapper'>
            <Card className={classes.card} onClick={toggleProjectDialog}>
                <CardMedia
                    className={classes.cover}
                    image={CorgiImage}
                />
            </Card>
            <Dialog
                open={dialogIsOpen}
                onClose={toggleProjectDialog}
                maxWidth={'sm'}
                PaperProps={{
                    classes: {
                        root: classes.dialog
                    }
                }}
            >
                <div>
                    <div className={classes.dialogImage}>
                        <img src={CorgiImage}  alt="" className={classes.image}/>
                    </div>
                    <div className="dialog-info-wrapper">
                        <div className='dialog-title'>{dialogTitle}</div>
                        <Card className={classes.dialogDescriptionCard}>
                            <div>{dialogDescription}</div>
                        </Card>
                        <div className="dialog-technologies">
                            {projectTechnology.map(technology => (
                                <span className="dialog-technologies-tag" key={technology}>{technology}</span>
                            ))}
                        </div>
                        <div className="dialog-links">
                            <span className="icon-wrapper"><GithubIcon className="links-icon" id="github-icon"/></span>
                            <span className="icon-wrapper"><ExternalIcon className="links-icon" id="external-icon"/></span>
                        </div>
                    </div>
                </div>
            </Dialog>
        </section>
    )
}

export default Project;