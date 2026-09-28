import React, { useState } from 'react';
import '../index.css';
import { MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import RouteDetail from '../component/RouteDetail';
import Snackbar from '@mui/material/Snackbar';


const Contact = () => {

    const [data, setData] = useState({ name: '', email: '', subject: '', msg: '' });
    const [message, setMessage] = useState('');
    const [nameError, setName] = useState(false);
    const [emailError, setEmail] = useState(false);
    const [subjectError, setSubject] = useState(false);
    const [msgError, setMsg] = useState(false);
    const [open, setOpen] = useState(false);
    const vertical = 'bottom';
    const horizontal = 'center';
    const {
        name, email, subject, msg
    } = data;
    async function submit(e) {
        let isEmpty = false;
        if (name.length === 0) {
            setName(true);
            isEmpty = true;
        }
        if (email.length === 0) {
            setEmail(true);
            isEmpty = true;
        }
        if (subject.length === 0) {
            setSubject(true);
            isEmpty = true;
        }
        if (msg.length === 0) {
            setMsg(true);
            isEmpty = true;
        }

        e.preventDefault();
        if (!isEmpty) {
            let response = await fetch(`https://artrueinfotech.com/furniture/mail/mail.php?defaultFormContactNameEx=${data.name}&defaultFormContactEmailEx=${data.email}&defaultFormContactSubjectEx=${data.subject}&defaultFormContactMessageEx=${data.msg}`);
            response = await response.json();
            setMessage(response?.response[0]);
            setOpen(true);
            window.location.reload();
        }
    }

    function handle(e) {
        const newdata = { ...data };
        const value = e.target.value;
        if (value.length !== 0) {
            if (e.target.id === 'name' && nameError) {
                setName(false);
            }
            if (e.target.id === 'email' && emailError) {
                setEmail(false);
            }
            if (e.target.id === 'subject' && subjectError) {
                setSubject(false);
            }
            if (e.target.id === 'msg' && msgError) {
                setMsg(false);
            }
        }
        newdata[e.target.id] = value;
        setData(newdata);
    }

    return (
        <>
            <RouteDetail route="CONTACT US" path="Home / Contact us" />
            <MDBContainer style={{ padding: '50px 40px 50px 40px', color: '#feb70e' }}>
                <MDBRow start="0">
                    <MDBCol md="6">
                        <form>
                            <p className="h4 text-center mb-4">CONTACT US</p>
                            <label htmlFor="name" className="grey-text">
                                Address :-
                            </label>
                            <p>A241, Amrkunj Soc, Parmukh Chaya Road, Yogi Chowk</p>
                            <p>Varachha, Surat, Gujarat-395006</p>

                            <br />
                            <label htmlFor="email" className="grey-text">
                                Phone Number :-
                            </label>
                            <p>+91 97221 50272</p>

                            <br />
                            <label htmlFor="subject" className="grey-text">
                                Email :-
                            </label>
                            <p><a href="mailto:sweatmanipvc@gmail.com" style={{ listStyleType: 'none', textDecoration: 'none', color: '#fff' }}>sweatmanipvc@gmailcom</a></p>

                            <br />
                            <label htmlFor="msg" className="grey-text">
                                Website :-
                            </label>
                            <p><a href="https://artrueinfotech.com/" target="_blank" style={{ listStyleType: 'none', textDecoration: 'none', color: '#fff' }}>www.sweatmanipvc.com</a></p>
                        </form>
                    </MDBCol>


                    {/* <MDBContainer style={{ padding: '30px' }}> */}

                    <MDBCol md="6">
                        <form>
                            <p className="h4 text-center mb-4">Write to us</p>

                            <input type="text" id="name" className="form-control" placeholder='Enter Your Name' value={data.name} onChange={(e) => handle(e)} />
                            {nameError && <div style={{ color: 'white' }}>Please enter name!</div>}
                            <br />

                            <input type="email" id="email" className="form-control" placeholder='Enter Your Email' value={data.email} onChange={(e) => handle(e)} />
                            {emailError && <div style={{ color: 'white' }}>Please enter email!</div>}
                            <br />

                            <input type="text" id="subject" className="form-control" placeholder='Enter The Subject' value={data.subject} onChange={(e) => handle(e)} />
                            {subjectError && <div style={{ color: 'white' }}>Please enter subject!</div>}
                            <br />

                            <textarea type="text" id="msg" className="form-control" placeholder='Enter Your Message' rows="3" value={data.msg} onChange={(e) => handle(e)} />
                            {msgError && <div style={{ color: 'white' }}>Please enter message!</div>}
                            <div className="text-center mt-4">
                                <Button variant="contained" color="warning" onClick={(e) => submit(e)} endIcon={<SendIcon />}>
                                    Send
                                </Button>
                            </div>
                        </form>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>

            <div class="map-responsive">

                {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3718.8401559619074!2d72.87771671493626!3d21.23818618588538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04f900a37cf4d%3A0xb08d4f8ef02e76bf!2sVarni%20Plaza!5e0!3m2!1sen!2sin!4v1645878582970!5m2!1sen!2sin" width="100%" height="450" style={{ border: 0 }} allowfullscreen="" loading="lazy"></iframe> */}
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.493334374157!2d72.88658871473477!3d21.212277185899246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04f7a236f7067%3A0x46b1e62841a4d15!2sAmrakunj%20Society%20Pani%20Tanky%20Yogi%20Chowk!5e0!3m2!1sen!2sin!4v1650386257629!5m2!1sen!2sin" width="100%" height="450" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

            </div>
            <Snackbar
                anchorOrigin={{ vertical, horizontal }}
                open={open}
                onClose={() => setOpen(false)}
                message={message}
                key={vertical + horizontal}
                autoHideDuration={4000}
            />

        </>
    )
}

export default Contact






