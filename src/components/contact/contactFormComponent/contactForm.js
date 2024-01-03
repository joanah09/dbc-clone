import React, { useState } from "react";
import { Link } from "react-router-dom";

function ContactForm() {
    const initialState = {
        name: "",
        email: "",
        message: "",
        isChecked: false,
    };

    const [formData, setFormData] = useState(initialState);

    function handleChange(event) {
        const { name, value, type, checked } = event.target;

        const newValue = type === "checkbox" ? checked : value;

        setFormData((prevState) => ({
            ...prevState,
            [name]: newValue,
        }));
    }

    return (
        <form action="https://formsubmit.co/joanah009@gmail.com" method="POST">
            <input
                type="text"
                placeholder="Full Name"
                name="name"
                onChange={handleChange}
                value={formData.name}
            />
            <input
                type="email"
                placeholder="Email Address"
                name="email"
                onChange={handleChange}
                value={formData.email}
            />
            <textarea
                placeholder="Message"
                name="message"
                onChange={handleChange}
                value={formData.message}
            />
            <div className="checkbox">
                <input
                    type="checkbox"
                    name="isChecked"
                    onChange={handleChange}
                    checked={formData.isChecked}
                    required="required"
                />
                <p>By proceeding, you have read and understood our Privacy Policy and
                agree to Conveyancing.com.au <Link to="/">Terms of Use.</Link></p>
            </div>
            <div className="btn-container">
                <button type="submit">Submit</button>
            </div>
        </form>
    );
}

export default ContactForm;
