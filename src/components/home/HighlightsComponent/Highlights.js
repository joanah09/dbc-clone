import React from "react";
import Map from "./Map";
import HighlightsImage from "./HighlightsImage";
import data from "../../../data-test";

function Highlights() {
    const highlightsImage = data.content.highlights.map(item => {
        return (
          <HighlightsImage key={item.title}
          {...item} 
          />
        )
      })
  
    return (
        <section className="highlights">
        <article>{highlightsImage}</article> 
        <Map />
      </section>
    )
}

export default Highlights
