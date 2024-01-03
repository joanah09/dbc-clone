import Nav from "../components/GlobalComponents/NavbarComponent/Nav";
import Header from "../components/GlobalComponents/HeaderComponent/Header";
import Footer from "../components/GlobalComponents/FooterComponent/Footer";
import Info from "../components/home/infoComponent/Info";
import Highlights from "../components/home/HighlightsComponent/Highlights";
import Quote from "../components/GlobalComponents/QuoteComponent/Quote";
import Services from "../components/home/ServicesComponent/Services";
import Brands from "../components/home/BrandsComponent/Brands";

function Home() {
    return (
        <main className="home">       
            <Nav />
            <Header />    
                <Info />
                <Highlights />
                {/* <Quote /> */}
                <Services />
                <Brands />
            <Footer />
        </main>


    )
}


export default Home