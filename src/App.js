import './App.css';
// import './Appmobile.css';
// import './nav.css';
import Header from './components/nav'
import Footer from './components/footer'
import Home from './components/home'
import Contact from './components/contact'
import Slideshow from './components/Slideshow';
import Shop from './components/shop'

// Able to create new routes on site
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
   <>
   {/* routes/end points below will render the different components */}
   <Router >
   <Header />
    <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/shop" element={<Shop />} />
    </Routes>
  <Footer />
  </Router>
   </>
  );
}
 export default App;