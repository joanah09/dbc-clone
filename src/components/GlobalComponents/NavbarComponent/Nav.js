import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Nav() {
    const [screenSize, setScreenSize] = useState(window.innerWidth)
    const [burgerBtn, setBurgerBtn] = useState(false)

    useEffect(() => {
        function handleWidth() {
            setScreenSize(window.innerWidth)
        }
        window.addEventListener("resize", handleWidth)
        return () => {
            window.removeEventListener("resize", handleWidth)
        }
    }, [])

    function toggleBurger() {
        setBurgerBtn(!burgerBtn)
        document.body.classList.toggle('overflow')
    }

    const styles = {
        visibility: burgerBtn ? "visible" : "hidden",
        right: burgerBtn ? "0px" : "-999px",
    }

    return (
        <nav>
            <Link to="/"><img className="logo" src="../../images/logo.svg" alt="logo" /></Link>
            <div className={screenSize > 767 ? "for-desk" : "for-mob"}>
                <div className="burger" onClick={toggleBurger}>
                    <div className={burgerBtn ? "burger-top" : null}></div>
                    <div className={burgerBtn ? "burger-mid" : null}></div>
                    <div className={burgerBtn ? "burger-bot" : null}></div>
                </div>

                <div className="menu" style={screenSize > 767 ? null : styles}>
                    <ul>
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/contact">Contact Us</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}


export default Nav