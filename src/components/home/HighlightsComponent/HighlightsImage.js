import React from "react";

function HighlightsImage(item) {
    return (
        <figure>
            <img src={`../../images/home/${item.imageUrl}`} />
            <figcaption>{item.title}</figcaption>
        </figure>
    )
}

export default HighlightsImage