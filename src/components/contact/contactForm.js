import React, { useState } from "react";

function ContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    })

    function handleChange(event) {
        const {name, value} = event.target
        setFormData(prevState => {
            return {
                ...prevState,
                [name]: value
            }
        })
    }

    function handleSubmit(event) {
        // event.preventDefault()
        console.log(formData)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Full Name" name="name" onChange={handleChange} value={formData.name} />
            <input type="email" placeholder="Email Address" name="email" onChange={handleChange} value={formData.email}/>
            <textarea placeholder="Message" name="message" onChange={handleChange} value={formData.message}/>
            <p>By proceeding, you have read and understood our Privacy Policy and agree to Conveyancing.com.au Terms of Use.</p>
            <div className="btn-container">
                <button>Submit</button>
            </div>
        </form>
    )
}

export default ContactForm