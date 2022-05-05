import { Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { useState, useEffect } from 'react';

const HomePages = lazy(() => import('./pages/HomePages'));
const ProfilPages = lazy(() => import('./pages/ProfilPages'));
const ErrorPage = lazy(() => import('./components/Error/ErrorPage'));
const NotConnected =  lazy(() => import('./components/NotConnected/NotConnected'));
const AllProducts =  lazy(() => import('./pages/AllProductsPages'));
const Loading =  lazy(() => import('./components/Loading/Loading'));

function App() {
  // const [isConnected, setIsConnected] = useState(false);
  // const login = JSON.parse(window.localStorage.getItem('isLoggin'));
  // useEffect(() => {
  //   setIsConnected(JSON.parse(window.localStorage.getItem('isLoggin')));
  //   console.log("App",isConnected);
  //   return () => {
  //     setIsConnected(JSON.parse(window.localStorage.getItem('isLoggin')));
  //     console.log("App Return",isConnected);
  //   }
  // },[login]);

  return (
    <>
      <Suspense fallback={<Loading/>}>
        <Routes>
          <Route exact path='/' element={ < HomePages /> }/>
          <Route exact path='/Profil/:id' element={ < ProfilPages /> }/>
          <Route exact path='/Not_Connected' element={ < NotConnected /> }/>
          <Route path='/Products' element={ < AllProducts /> }/>
          <Route path="*" element={ < ErrorPage /> }/ >
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
