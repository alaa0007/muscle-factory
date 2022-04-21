import Navbar from "./components/Navbar/Navbar";
import HomePages from "./pages/HomePages";
import Footer from "./components/Footer/Footer";
import Contact from "./components/Contact/Contact";
import ProfilPages from "./pages/ProfilPages";

import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <>
    <Navbar />
    <Routes>
    <Route exact path='/' element={<HomePages/>}/>
    <Route exact path='/Profil' element={<ProfilPages/>}/>
    </Routes>
    <Contact />
    <Footer />
    </>
  );
}

export default App;
