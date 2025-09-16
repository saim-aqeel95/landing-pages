import { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { customStyles } from './styles';
// import Solar from './pages/Solar';
// import HomeService from './pages/HomeService';
// import AutoInsurance from './pages/AutoInsurance';
import Navbar from './components/Navbar';
const Solar = lazy(() => import('./pages/Solar'));
const HomeService = lazy(() => import('./pages/HomeService'));
const AutoInsurance = lazy(() => import('./pages/AutoInsurance'));

const App = () => {
  return (
    <BrowserRouter basename={"/landing-pages"}>
      <div className="min-h-screen bg-gray-50 font-sans text-gray-800 antialiased leading-relaxed">
        <style>{customStyles}</style>
        <Navbar />
        {/* <Suspense fallback={<div>Loading...</div>}> */}
        <Routes>
          <Route path="/" element={<Suspense fallback={<div>Loading...</div>}><Solar /></Suspense>} />
          <Route path="/home-services" element={<Suspense fallback={<div>Loading...</div>}><HomeService /></Suspense>} />
          <Route path="/auto-insurance" element={<Suspense fallback={<div>Loading...</div>}>< AutoInsurance/></Suspense>} />
        </Routes>
        {/* </Suspense> */}
      </div>
    </BrowserRouter>
  );
};

export default App;
