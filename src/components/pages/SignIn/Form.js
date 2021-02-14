import React, { useState } from 'react';
import './SignIn.css';
import SignIn from './SignIn';
import FormSuccess from './FormSuccess';

const Form = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);

    function submitForm() {
        setIsSubmitted(true);
    }
    return (
        <>
            <div className='form-container'>
                <span className='close-btn'>×</span>
                <div className='form-content-left'>
                    <img className='form-img' src='login.svg' alt='spaceship' />
                </div>
                {!isSubmitted ? (
                    <SignIn submitForm={submitForm} />
                ) : (
                        <FormSuccess />
                    )}
            </div>
        </>
    );
};

export default Form;