import React, { useState } from 'react';

import {validateEmail} from '../../utils/helpers';

function ContactForm() {
    const [email, setEmail] = useState('');
    const [userName, setUserName] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const handleInputChange = (e) => {
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;
        if (inputType === 'email') {
            setEmail(inputValue);
        } else if (inputType === 'userName') {
            setUserName(inputValue);
        } else {
            setMessage(inputValue);
        }
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (!validateEmail(email) || !userName) {
            setErrorMessage('Email or name are required');
            return;
        }
        if (!setMessage(message)) {
            setErrorMessage('Message is required');
            return;
        }
        setUserName('');
        setMessage('');
        setEmail('');
    };

    return (
        <section id="reach-out" className="contact">
            <div className="flex-row">
                <h2 className="section-title secondary-border">Reach Out</h2>
            </div>

            <div className="contact-info">
                <div>
                    <h2>Hello {userName}</h2>
                    <p>Thank you for reaching out. I will get back to you as soon as possible.</p>
                    <address>
                        E:{""}
                        <a href={`mailto://mlgibson8@gmail.com`}>mlgibson8@gmail.com</a>
                    </address>
                </div>

            <div className='contact-form'>
                <h2>Contact!</h2>
               <form className="form">
                <label for='contact-name'>Name:</label>
               < input
                    value={userName}
                    name='userName'
                    onChange={handleInputChange}
                    type='text'
                    id="contact-name"
                    placeholder='Name'
                />

                <label for='contact-email'>Email:</label>
                <input
                    value={email}
                    name='email'
                    onChange={handleInputChange}
                    type='email'
                    id="contact-email"
                    placeholder='Email'
                />

                <label for='contact-message'>Message:</label>
                <textarea
                    value={message}
                    name='message'
                    onChange={handleInputChange}
                    id="contact-message"
                    placeholder='Message'
                />
                <button type="button" onClick={handleFormSubmit}>Submit</button>
            </form>
            </div>
            {errorMessage && (
                <div>
                    <p className='error-text'>{errorMessage}</p>
                    </div>
            )}
            </div>
        </section>
    );
}
export default ContactForm;

