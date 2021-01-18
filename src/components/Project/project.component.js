import { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import './project.scss';
import CorgiImage from '../../assets/images/CORGI.jpg';

const useStyles = makeStyles((theme) => ({
    projectWrapper: {
      marginTop: '1em',
      marginBottom: '1em',
    },
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
    },
    dialogImage: {
        // width: '50%'
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
    const classes = useStyles();

    function toggleProjectDialog() {
        setDialogIsOpen(!dialogIsOpen);
    }

    return (
        <section className={classes.projectWrapper}>
            <Card className={classes.card} onClick={toggleProjectDialog}>
                <CardMedia
                    className={classes.cover}
                    image={CorgiImage}
                    title="pic of corgi"
                />
            </Card>
            <Dialog
                open={dialogIsOpen}
                onClose={toggleProjectDialog}
                maxWidth={'md'}
                PaperProps={{
                    classes: {
                        root: classes.dialog
                    }
                }}
            >
                <div className="row">
                    <div className={`col-md-6 ${classes.dialogImage}`}>
                        <img src={CorgiImage}  alt="" className={classes.image}/>
                    </div>
                    <div className={`col-md-6 ${classes.dialogDescription}`}>
                        bbb
                    </div>
                </div>
                
                {/* <DialogTitle id="alert-dialog-title">{"Use Google's location service?"}</DialogTitle>
                <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    Let Google help apps determine location. This means sending anonymous location data to
                    Google, even when no apps are running.
                </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={toggleProjectDialog} color="primary">
                        Disagree
                    </Button>
                    <Button onClick={toggleProjectDialog} color="primary">
                        Agree
                    </Button>
                </DialogActions> */}
            </Dialog>
        </section>
    )
}

export default Project;