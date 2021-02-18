import { React, useEffect, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Fade from 'react-reveal/Fade';
import axios from 'axios';
import CircularProgress from '@material-ui/core/CircularProgress';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import Tooltip from '@material-ui/core/Tooltip';

import './contact.scss';
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
    messageInput: {
        width: '100%',
        "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
            borderColor: "white"
        },
        "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
            borderColor: "white"
        },
    },
    input: {
        fontSize: '1.5em',
        padding: '0.5em',
        color: 'white'
    },
    avatar: {
        width: '15em',
        height: '15em',
        marginTop: '3em'
    },
    sendButton: {
        width: '100%',
        marginTop: '1em',
        backgroundColor: '#40F99B',
        fontSize: '1.5em',
        fontWeight: 'bold',
        "&:hover" : {
            backgroundColor: '#40F99B'
        }
    },
    progressBar: {
        marginTop: '1em'
    },
    mailIcon: {
        fontSize: '1.5em'
    },
    alert: {
        fontSize: '1em'
    },
    buttonTooltip: {
        fontSize: '1em'
    }
}));

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function Contact() {
    const classes = useStyles();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [showProgressBar, setProgressBar] = useState(false);
    const [showSnackbar, setSnackbarVisible] = useState(false);
    const [snackBarMessage, setSnackbarMessage] = useState('');
    const [snackBarSeverity, setSnackBarSeverity] = useState('success');
    const [messageButtonDisabled, setMessageButtonDisabled] = useState(true);

    useEffect(() => {
        if(name && email && message) {
            setMessageButtonDisabled(false);
        } else {
            setMessageButtonDisabled(true);
        }
    }, [name, email, message]);

    function sendMessage() {
        setProgressBar(true);
        axios.post('https://emailapinodejs.herokuapp.com/api/email', generateEmailObject())
        .then(res => {
            if(res.data.success) {
                setProgressBar(false);
                setSnackBarSeverity('success');
                setSnackbarMessage('Message has been succesfully sent.');
                setSnackbarVisible(true);
                setName('');
                setEmail('');
                setMessage('');
            }
        }).catch(err => {
            setProgressBar(false);
            setSnackBarSeverity('error');
            setSnackbarMessage('Message failed to send.');
            setSnackbarVisible(true);
            console.log('error', err);
        });
    }

    function generateEmailObject() {
        return {
            email: email,
            subject: `Contacting from Portfolio Site: ${name} / ${email}`,
            message:  message
        }
    }

    function handleSnackbarClose(event, reason) {
        if (reason === 'clickaway') {
          return;
        }
        setSnackbarVisible(false);
    };

    function onFieldChange(event, fieldValue) {
        switch(fieldValue) {
            case 'name':
                setName(event.target.value);
                break;
            case 'email':
                setEmail(event.target.value);
                break;
            case 'message':
                setMessage(event.target.value);
                break;
            default:
                break;
        }
    }

    return (
        <section className="section-wrapper" id="Contact">
            <div className="row">
                <div className="col-md-12 ">
                    <Fade bottom><div className="section-titles">CONTACT</div></Fade>
                </div>
            </div>
            <div className="row contact-wrapper">
                {/* <div className="col-md-6 avatar-wrapper">
                    <Flip><Avatar alt="Remy Sharp" src={CorgiImage} className={classes.avatar}/></Flip>
                </div> */}
                <div className="col-md-12">
                    <Fade right>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="input-labels">Name:</div>
                                <div>
                                    <TextField 
                                        variant="outlined" 
                                        className={classes.messageInput}
                                        InputProps={{
                                            classes: {
                                                input: classes.input,
                                            },
                                        }}
                                        onChange={(e) => onFieldChange(e, 'name')}
                                        value={name}
                                    />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="input-labels">Email:</div>
                                <div>
                                    <TextField 
                                        variant="outlined" 
                                        className={classes.messageInput}
                                        InputProps={{
                                            classes: {
                                            input: classes.input,
                                            },
                                        }}
                                        onChange={(e) => onFieldChange(e, 'email')}
                                        value={email}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="input-labels">Message:</div>
                                <div>
                                    <TextField 
                                        variant="outlined" 
                                        className={classes.messageInput}
                                        multiline
                                        rows={10}
                                        InputProps={{
                                            classes: {
                                                input: classes.input,
                                            },
                                        }}
                                        onChange={(e) => onFieldChange(e, 'message')}
                                        value={message}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12 send-button-row">
                                {
                                    !showProgressBar && 
                                    <Tooltip title="Please enter Name, Email, and Message."  className={classes.buttonTooltip}>
                                        <span className="send-button-container">
                                            <Button variant="contained" disabled={messageButtonDisabled} className={classes.sendButton} onClick={sendMessage}>
                                                <MailOutlineIcon className={classes.mailIcon}/>
                                            </Button>
                                        </span>
                                    </Tooltip>
                                }
                                {
                                    showProgressBar && <CircularProgress className={classes.progressBar}/>
                                }
                            </div>
                            <Snackbar open={showSnackbar} autoHideDuration={5000} onClose={handleSnackbarClose}>
                                <Alert onClose={handleSnackbarClose} severity={snackBarSeverity} className={classes.alert}>
                                    {snackBarMessage}
                                </Alert>
                            </Snackbar>
                        </div>
                    </Fade>
                </div>
            </div>
        </section>
    )
}

export default Contact;