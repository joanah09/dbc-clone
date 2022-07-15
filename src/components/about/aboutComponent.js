import React from "react";
import { Link } from "react-router-dom";
import Quote from "../GlobalComponents/QuoteComponent/Quote";
import data from "../../data-test";
import AboutContent from "./aboutContent";

function AboutComponent() {
    const description = data.about.content.map((item, id) => {
        return (
        <AboutContent key={id} {...item} />
        )
    })


    console.log(description)
    return (
        <>
        <div className="about_container-content">
            <p>A career at Deep Blue Company means joining a community of people who bring their best selves to work, challenge the ordinary, embrace collaboration and take pride in truly owning their roles. We have the structure of an experienced business with the mindset of a scale-up that is constantly looking for opportunities to be better than we were yesterday. Our teams are empowered to drive creativity, innovation and customer experience; and create new solutions to old problems – and our approach to a career within DBC is no different.</p>
            <p>We look for experts who are still a work in progress, our hiring process strives to match the best fit applicant to the open roles – but ‘best fit’ means a lot more than just experience. We look for people who can confidently demonstrate expertise in their domains as well as a passion for continuous learning and development. We look for experts who are still a work in progress. Ultimatley, it’s about what drives you, and how you view customers, clients and colleagues. That mindset shapes the work we do together to not only deliver great results but also to constantlty learn from each other.</p>
            
            <h3>You and DBC</h3>
            <figure>
                <img src="../../images/about/about-img.jpg" />
            </figure>
            <p>Some of the benefits of joining DBC include:</p>
            <article className="about_container--content">
                {description}
            </article>
        </div>
        <Quote />
        </>
    )
}

export default AboutComponent