import { useState, useEffect } from 'react';
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
        position: 'relative',
        '&:hover': {
            cursor: 'pointer',
        },
    },
    dialog: {
        overflowX: 'hidden'
    },
    dialogDescriptionCard: {
        backgroundColor: 'rgba(113,124,137,1)',
        color: 'white',
        fontSize: '1.3em',
        marginLeft: '1.3em',
        marginRight: '1.3em',
        padding: '1em',
        fontFamily: "'Open Sans', sans-serif"
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

    const [title, setTitle] = useState('');
    const [dialogTitle, setDialogTitle] = useState('');
    const [dialogDescription, setDialogDescription] = useState('');
    const [projectTechnology, setProjectTechs] = useState([]);
    const [projectImage, setProjectImage] = useState(null);

    useEffect(() => {
        setTitle(props.projectData.title);
        setDialogTitle(props.projectData.dialogTitle);
        setDialogDescription(props.projectData.description);
        setProjectTechs(props.projectData.technology);
        setProjectImage(props.projectData.image);
    }, [props]);

    const classes = useStyles();
 
    function toggleProjectDialog() {
        setDialogIsOpen(!dialogIsOpen);
    }

    function onLinksClick(linkType) {
        let link;
        switch(linkType) {
            case 'github':
                link = props.projectData.githubLink;
                window.open(link, '_blank');
                break;
            case 'website':
                link = props.projectData.websiteLink;
                break;
            default:
                break;
        }

        
    }

    return (
        <section className='project-wrapper'>
            <div className="card-wrapper">
                <Card className={classes.card} onClick={toggleProjectDialog}>
                    <CardMedia
                        className={classes.cover}
                        image={projectImage}
                    />
                </Card>
                <Card className="project-title-card"><span className="project-title">{title}</span></Card>
            </div>
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
                        <img src={projectImage}  alt="" className={classes.image}/>
                    </div>
                    <div className="dialog-info-wrapper">
                        <div className='dialog-title'>{dialogTitle}</div>
                        <Card elevation={5} className={classes.dialogDescriptionCard}>
                            <div>{dialogDescription}</div>
                        </Card>
                        <div className="dialog-technologies">
                            {projectTechnology.map(technology => (
                                <span className="dialog-technologies-tag" key={technology}>{technology}</span>
                            ))}
                        </div>
                        <div className="dialog-links">
                            <span className="links-wrapper"><GithubIcon className="links-icon" id="github-icon" onClick={() => onLinksClick('github')}/></span>
                            <span className="links-wrapper"><ExternalIcon className="links-icon" id="external-icon" onClick={() => onLinksClick('website')}/></span>
                        </div>
                    </div>
                </div>
            </Dialog>
        </section>
    )
}

export default Project;