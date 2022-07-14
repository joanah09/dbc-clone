import React from "react";
import Nav from "../components/GlobalComponents/Nav";
import Header from "../components/GlobalComponents/HeaderComponent/Header";
import Footer from "../components/GlobalComponents/FooterComponent/Footer";
import ContactForm from "../components/contact/contactForm";

function Contact() {
    return (
        <main className="contact">
            <Nav />
            <Header />
            <section className="contact_container">
                <div className="contact_container-title">
                    <h2>Contact Us</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dignissim et aliquam leo leo netus enim, felis vel odio.</p>
                </div>
                <ContactForm />
            </section>
            <Footer />
        </main>
    )
}

export default Contact