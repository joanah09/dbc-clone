import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Testimonials from "./testimonialsComponent/testimonials";

function Quote() {
    const [testimonials, setTestimonails] = useState([])
    useEffect(() => {
        async function getData() {
            const res = await fetch("https://dogapi.dog/api/v2/breeds")
            const data = await res.json()
            setTestimonails(data.data)
        }
        getData()
    }, [])
    
    const testi = testimonials.map((item, id) => {
       return <Testimonials key={id} 
       {...item} /> 
    })

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <section className="quote">
            <h3>Facts</h3>
            <Slider {...settings}>
                {testi}
            </Slider>
        </section>


    )
}


export default Quote