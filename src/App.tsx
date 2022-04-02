import { lazy, Suspense } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import 'animate.css';
import Navbar from './components/shared/Navbar';
import Loader from './components/shared/Loader';

const Landing = lazy(() => import('./components/Landing'));
const Test = lazy(() => import('./components/Test'));
const TestManagement = lazy(() => import('./components/management/TestManagement'));
const TestResult = lazy(() => import('./components/TestResult'));

function App() {

  return (
    <BrowserRouter>
      <main className='bg-slate-50 h-screen bg-bg-mobile md:bg-bg bg-center bg-no-repeat bg-cover'>
        <Navbar />
        <Routes>
          <Route path="/" element={
            <Suspense fallback={(<Loader/>)}>
              <Landing />
            </Suspense>
          } />
          <Route path="/test" element={
            <Suspense fallback={(<Loader/>)}>
              <Test />
            </Suspense>
          } />
          <Route path="/management" element={
            <Suspense fallback={(<Loader/>)}>
              <TestManagement />
            </Suspense>
          } />
          <Route path="/result" element={
            <Suspense fallback={(<Loader/>)}>
              <TestResult />
            </Suspense>
          } />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
