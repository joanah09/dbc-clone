import Nav from "../components/GlobalComponents/Nav";
import Header from "../components/GlobalComponents/HeaderComponent/Header";
import Footer from "../components/GlobalComponents/FooterComponent/Footer";
import CareersComponent from "../components/careers/careersComponent";

function Careers() {
    return (
        <main className="careers">
            <Nav />
            <Header />
            <section className="careers_container">
                <CareersComponent />
                
            </section>
            <Footer />
        </main>
    )
}

export default Careers