import React from "react"
import ReactStars from "react-rating-stars-component";

function Testimonials(props) {
    console.log(props)

    const firstExample = {
        size: 30,
        value: `${props.rating}`,
        edit: false
      };
      
    return (
        <section className="quote_content">
        <article>
            <span><ReactStars {...firstExample} /></span>
                <p>{props.message}</p>
                <div className="quote_content-audio">
                    <audio controls src={props.audio}>
                        Your browser does not support the
                        <code>audio</code> element.
                    </audio>
                </div>
                <div className="quote_content-avatar">
                    <div className="icon"><img src={props.avatar} /></div>
                    <div className="title-info">
                        <h4>{props.name}</h4>
                        <span>{props.designation} from {props.location}</span>
                    </div>
                </div>
            </article>
        </section>
        
    )

}

export default Testimonials