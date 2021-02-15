import { React, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import CorgiImage from '../../assets/images/CORGI.jpg';
import Fade from 'react-reveal/Fade';
import Flip from 'react-reveal/Flip';
import axios from 'axios';

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
    }
}));

function Contact() {
    const classes = useStyles();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    function sendMessage() {
        console.log('sending message!!');
        axios.post('https://emailapinodejs.herokuapp.com/api/email', generateEmailObject())
        .then(res => {
            if(res.data.success) {
                setName('');
                setEmail('');
                setMessage('');
            }
        }).catch(err => {
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

    return (
        <section className="section-wrapper" id="Contact">
            <div className="row">
                <div className="col-md-12 ">
                    <Fade bottom><div className="section-titles">contact( ) &#123;</div></Fade>
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
                                        onChange={(e) => setName(e.target.value)}
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
                                        onChange={(e) => setEmail(e.target.value)}
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
                                        onChange={(e) => setMessage(e.target.value)}
                                        value={message}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <Button variant="contained" className={classes.sendButton} onClick={sendMessage}>
                                    Send
                                </Button>
                            </div>
                        </div>
                    </Fade>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12" >
                    <div className="section-titles">&#125;</div></div>
            </div>
        </section>
    )
}

export default Contact;