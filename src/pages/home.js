import Info from "../components/home/Info";
import Highlights from "../components/home/HighlightsComponent/Highlights";
import Quote from "../components/home/Quote";
import Services from "../components/home/ServicesComponent/Services";
import Brands from "../components/home/BrandsComponent/Brands";

function Home() {
    return (
        <main className="home">           
            <Info />
            <Highlights />
            <Quote />
            <Services />
            <Brands />
        </main>


    )
}


export default Home