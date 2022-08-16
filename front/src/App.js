import './App.css';
import  './index.css'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Navigation from "./Components/Navigation/Navigation";
import Header from "./Components/Header/Header";
import About from "./Components/About/About";
import Services from "./Components/Services/Services";
import Portfolio from "./Components/Portfolio/Portfolio";
import Map from "./Components/Map/Map";
// import CallToAction from "./Components/CallToAction/CallToAction";
// import Footer from "./Components/Footer/Footer";
// import Callout from "./Components/Callout/Callout";
function App() {
  return (
      <BrowserRouter>
        <Navigation/>
        {/*<Header/>*/}
        {/*<About></About>*/}
        {/*<Services></Services>*/}
        {/*<Callout/>*/}
        {/*<Portfolio/>*/}
        {/*<CallToAction/>*/}
        {/*<Map/>*/}
        {/*<Footer/>*/}
        <Routes>
          <Route path="/" exact element={<Header />} />
          <Route path="/about" exact element={<About />} />
          <Route path="/services" exact element={<Services />} />
          <Route path="/portfolio" exact element={<Portfolio />} />
          <Route path="/contact" exact element={<Map />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
