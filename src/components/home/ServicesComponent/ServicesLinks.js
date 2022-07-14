import React from "react";

function ServicesLinks(service) {
    return (
        <p><a href={service.link}>{service.linkName}<img src="../images/home/arrow-yellow.svg" /></a></p>
    )
}

export default ServicesLinks