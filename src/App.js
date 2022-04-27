import HomePages from "./pages/HomePages";
import ErrorPage from "./components/Error/ErrorPage";
import { Route, Routes } from 'react-router-dom';
import ProfilPages from "./pages/ProfilPages";


function App() {
  return (
    <>
    <Routes>
    <Route exact path='/' element={<HomePages/>}/>
    <Route exact path='/Profil/:id' element={<ProfilPages/>}/>
    <Route path="*" element={<ErrorPage/>}/ >
    </Routes>
    </>
  );
}

export default App;
