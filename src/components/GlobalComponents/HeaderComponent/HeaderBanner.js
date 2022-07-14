import React from "react";

function HeaderBanner(item) {
    return (
        <>
            <img className="banner" src={`../../images/banners/${item.image}`} 
            alt={item.alt}/>
        </>
        
    )
}

export default HeaderBanner