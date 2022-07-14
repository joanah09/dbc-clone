import React from "react";
import BrandsLogo from "./BrandsLogo";
import data from "../../../data-test";

function Brands() {
    const brandsLogo = data.brands.brandsLogo.map(item => {
        return (
          <BrandsLogo key={item.alt}
          {...item} />
        )
      })
    return (
        <section className="brands">
            <article>
                <h4>We are all certified with all major national and local institutions</h4>
                <div className="brands-logo">{brandsLogo}</div>
            </article>
        </section>
    )
}

export default Brands