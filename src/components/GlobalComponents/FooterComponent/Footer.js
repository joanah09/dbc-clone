import React from "react";
import FooterLinks from "./FooterLinks";
import data from "../../../data-test";

function Footer() {
    const footerLinks = data.footer.lists.map(list => {
        return (
            <FooterLinks key={list.title}
            {...list} />
        )
    })
return (
    <footer>
        <div className="footer-container">
            <div className="footer-container_content">
                <div className="footer-container-logo">
                    <img src="../../images/footer-logo.svg" alt="logo" />
                </div>
                
                <p>The DBC group has helped more than 70,000 Australians in their sale-to-settlement journey through our family of brands</p>
                <p>We're an international company, with more than 400 employees working across the DBC group in Australia and the Philippines</p>
            </div>
            <div className="footer-container_links">
                {footerLinks}
            </div>       
        </div>
    </footer>
)
}

export default Footer