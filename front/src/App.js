import './App.css';
import '../src/Components/About/about-styles.css'
import  './index.css'
import '../src/Components/Services/services-styles.css'
import '../src/Components/Portfolio/dostavka-styles.css'
import '../src/Components/SelectNovaPoshta/SelectNovaPoshta-styles.css'
import '../src/Components/Contact/Contact-styles.css'
import '../src/Components/Pack/Pack-styles.css'
import '../src/Components/Navigation/nav-styles.css'
import {BrowserRouter} from "react-router-dom";
import Navigation from "./Components/Navigation/Navigation";
import Header from "./Components/Header/Header";
import About from "./Components/About/About";
import Services from "./Components/Services/Services";
import Portfolio from "./Components/Portfolio/Portfolio";
import SelectNovaPoshta from "./Components/SelectNovaPoshta/SelectNovaPoshta";
import Contact from "./Components/Contact/Contact"
import Footer from "./Components/Footer/Footer";
import Callout from "./Components/Callout/Callout";
import Pack from "./Components/Pack/Pack"
function App() {
  return (
      <BrowserRouter>
        <Navigation/>
        <Header/>
        <About></About>
        <Services></Services>
        <Callout/>
        <Portfolio/>
          <Pack/>
        <SelectNovaPoshta/>

        <Contact/>
        <Footer/>
      </BrowserRouter>
  );
}

export default App;
