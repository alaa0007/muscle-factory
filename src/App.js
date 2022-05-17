import { Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';


const HomePages = lazy(() => import('./pages/HomePages'));
const ProfilPages = lazy(() => import('./pages/ProfilPages'));
const ErrorPage = lazy(() => import('./components/Error/ErrorPage'));
const NotConnected =  lazy(() => import('./components/NotConnected/NotConnected'));
const AllProducts =  lazy(() => import('./pages/AllProductsPages'));
const ProgramPages =  lazy(() => import('./pages/ProgramPages'));
const Loading =  lazy(() => import('./components/Loading/Loading'));

function App() {
  return (
    <>
      <Suspense fallback={<Loading/>}>
        <Routes>
          <Route exact path='/' element={ < HomePages /> }/>
          <Route exact path='/Profil/:id' element={ < ProfilPages /> }/>
          <Route exact path='/Not_Connected' element={ < NotConnected /> }/>
          <Route path='/Products' element={ < AllProducts /> }/>
          <Route path='/Program' element={ < ProgramPages /> }/>
          <Route path="*" element={ < ErrorPage /> }/ >
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
