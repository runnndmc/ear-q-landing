import React from 'react';
import './Form.css'

const Form = () => {
    const handleSubmit = () => {
        alert("Thank You! We will be in touch shortly")
    }
    return(
        <form className="create-form" onSubmit={handleSubmit}> {/* changes populate inside of state  */}
        <input
            className="input-name"
            placeholder='Name'
            // value={product.name}
            name='name'
            required
            autoFocus
            // onChange={handleChange}
        />
        <textarea
            className="textarea-description"
            rows={10}
            placeholder='Description'
            // value={product.description}
            name='description'
            required
            // onChange={handleChange}
        />
        <input
            className="input-image-link"
            placeholder='Image Link'
            // value={product.imgURL}
            name='imgURL'
            required
            // onChange={handleChange}
        />
        <button type='submit' className="submit-button">Submit</button>
        </form>
    )
}




export default Form