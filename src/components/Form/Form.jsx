import React from 'react';
import './Form.css'

const Form = () => {
    const handleSubmit = () => {
        alert("Thank You! We will be in touch shortly")
    }
    return(
        <div className="form-wrapper">
        <h4 className='form-title'>Get It Now</h4>
        <form className="form" onSubmit={handleSubmit}>
        <input
            className="input-first-name"
            placeholder='First Name'
            name='name'
            required
            autoFocus
        />
        <input
            className="input-last-name"
            placeholder='Last Name'
            name='name'
            required
            autoFocus
        />
        <input
            className="input-email"
            placeholder='Email'
            name='description'
            required
        />
        <input
            className="input-phone"
            placeholder='Phone Number'
            name='imgURL'
            required
        />
        <button type='submit' className="submit-button">Submit</button>
        </form>
        </div>
    )
}




export default Form