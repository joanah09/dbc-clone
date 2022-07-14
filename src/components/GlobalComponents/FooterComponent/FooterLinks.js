import React, { useState, useEffect } from "react";

function FooterLinks(list) {
    const [isHidden, setIsHidden] = useState(false)
    const [screenSize, setScreenSize] = useState(window.innerWidth)

    useEffect(() => {
        function handleWidth() {
            setScreenSize(window.innerWidth)
        }
        
        window.addEventListener("resize", handleWidth)
        return () => {
            window.removeEventListener("resize", handleWidth)
        }
    }, [])

    function toggleBtn() {
        setIsHidden(!isHidden)
    }


    const footerLink = list.links.map(link => {
        return (
            <li key={link.linkName}><a href={link.link}>{link.linkName}</a></li>
        )
    })
    
    return (
        <div className="list">
        <h6 onClick={toggleBtn} className={isHidden ? "minus" : "plus" && screenSize > 767 ? "" : "plus"}>{list.title}</h6>
        <ul className={isHidden ? "show" : "hide" && screenSize > 767 ? "" : "hide"}>
        {footerLink}
        </ul>
    </div>
    )
}

export default FooterLinks