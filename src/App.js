import logo from './logo.svg';
import './App.scss';
import Nav from './components/GlobalComponents/Nav';
import Header from './components/GlobalComponents/HeaderComponent/Header';
import Footer from './components/GlobalComponents/FooterComponent/Footer';
import Home from './pages/home';


function App() {

    return (
      <div className="App">
        <Nav />
        <Header />
        <Home />
        <Footer />
      </div>
  );
}

export default App;
