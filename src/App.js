// import HomePages from "./pages/HomePages";
// import ErrorPage from "./components/Error/ErrorPage";
import { Route, Routes } from 'react-router-dom';
// import ProfilPages from "./pages/ProfilPages";
import { Suspense, lazy } from 'react';


const HomePages = lazy(() => import('./pages/HomePages'));
const ProfilPages = lazy(() => import('./pages/ProfilPages'));
const ErrorPage = lazy(() => import('./components/Error/ErrorPage'));
const Loading =  lazy(() => import('./components/Loading/Loading'));

function App() {
  return (
    <>
      <Suspense fallback={<Loading/>}>
        <Routes>
          <Route exact path='/' element={<HomePages/>}/>
          <Route exact path='/Profil/:id' element={<ProfilPages/>}/>
          <Route path="*" element={<ErrorPage/>}/ >
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
