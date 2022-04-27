import Navbar from "./components/Navbar/Navbar";
import HomePages from "./pages/HomePages";
import Footer from "./components/Footer/Footer";
import Contact from "./components/Contact/Contact";
import Profil from "./components/Profil/Profil";
import { Route, Routes } from 'react-router-dom';
function App() {
  return (
    <>
    <Navbar />
    <Routes>
    <Route exact path='/' element={<HomePages/>}/>
    <Route exact path='/Profil/:id' element={<Profil/>}/>
    {/* <Route path="*" element={<ErrorPage/>} */}
    </Routes>
    <Contact />
    <Footer />
    </>
  );
}

export default App;
