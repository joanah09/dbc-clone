import React from "react";
import ServicesLinks from "./ServicesLinks";
import data from "../../../data-test";

function Services() {
    const links = data.products.list.map(service => {
        return (
            <ServicesLinks key={service.linkName} 
            {...service}/>
        )
    })

    return (
        <section className="services">
            <article>
                <img src="../../images/home/rbi-banner.jpg" />
                <div className="services-info">
                    <h2>Products and Services</h2>
                    <div className="services-info_links">
                        <div className="services-link-items">
                        {links}
                        </div>
                    </div>
                </div>
            </article>
        </section>

    )
}

export default Services