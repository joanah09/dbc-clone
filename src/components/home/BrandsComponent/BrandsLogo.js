import React from "react";

function BrandsLogo(props) {
    return (
        <div className="logo-link"><img src={`../../images/home/${props.image}`} alt={props.alt} /></div>
    )
}

export default BrandsLogo