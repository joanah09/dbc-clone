import React from "react";
import HeaderBanner from "./HeaderBanner";
import data from "../../../data-test";


function Header() {
    console.log(window.location.pathname)
    const banner = data.banner.images.map(item => {
        let url = window.location.pathname 
        let urlBanner = <HeaderBanner key={item.alt}
       {...item} />
       
        switch(url) {
            case "/careers":
                if (item.url === url) {
                    return (urlBanner) 
                }
                break;
            case "/contact":
                if (item.url === url) {                   
                    return (urlBanner)     
                }
                break;
            default:
                if (item.url === url) {
                    return (urlBanner) 
                }
            } 
        })
    return (
        <header>
             {banner}
        </header>
    )
}

export default Header