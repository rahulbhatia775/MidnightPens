import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Contactus from './components/Contactus';
import Footer from './components/Footer'
import Hero from './components/Hero';
import Features from './components/Feature';
import BlogWriting from './components/Writing';
import { createBrowserRouter , RouterProvider } from 'react-router-dom';
import Heading from './components/Heading';

function App() {
  const router = createBrowserRouter([
    {path:"/",
      element: <> <Navbar/><Hero/><Features/><Contactus/></>
    },
  
    {
      path:"/write",
      element: <> <Heading/><BlogWriting/> </>
      
    }
  ])
  return (
    <>
    <RouterProvider router={router}/>
    <Footer/>
    </>
  );
}

export default App;
