import Nav from "../components/GlobalComponents/Nav";
import Header from "../components/GlobalComponents/HeaderComponent/Header";
import Footer from "../components/GlobalComponents/FooterComponent/Footer";
import AboutComponent from "../components/about/aboutComponent";

function About() {
    return (
        <main className="about">
            <Nav />
            <Header />
            <section className="about_container">
                <article>
                    <h2>About Us</h2>
                    <AboutComponent />
                </article>
            </section>
            <Footer />
        </main>
    )
}

export default About