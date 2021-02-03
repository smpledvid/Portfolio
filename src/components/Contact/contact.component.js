import { React, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import CorgiImage from '../../assets/images/CORGI.jpg';
import Fade from 'react-reveal/Fade';
import Flip from 'react-reveal/Flip';

import './contact.scss';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
    messageInput: {
        width: '100%',
    },
    input: {
        fontSize: '1.5em',
        padding: '0.5em'
    },
    avatar: {
        width: '15em',
        height: '15em',
        marginTop: '3em'
    }
}));

function Contact() {
    const classes = useStyles();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    return (
        <section className="section-wrapper" id="Contact">
            <div className="row">
                <div className="col-md-12 ">
                    <Fade bottom><div className="section-titles">Contact Me</div></Fade>
                </div>
            </div>
            <div className="row contact-wrapper">
                <div className="col-md-6 avatar-wrapper">
                    <Flip><Avatar alt="Remy Sharp" src={CorgiImage} className={classes.avatar}/></Flip>
                </div>
                <div className="col-md-6">
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
                    </Fade>
                </div>
            </div>
        </section>
    )
}

export default Contact;