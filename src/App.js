import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Header from './components/Header';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Team from './components/Team';
import Testimonials from './components/Testimonials';
import ContactUs from './components/ContactUs';
import HeaderMoreForUs from './components/HeaderMoreForUs';
import RootLayout from './components/RootLayout';
import AboutMoreForUs from './components/AboutMoreForUs';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <Header /> },
    ],
  },
  { path: 'about', element: <About /> },
  { path: 'more-for-us', element: <HeaderMoreForUs /> },
  { path: 'about-more-for-us', element: <AboutMoreForUs /> },
  { path: 'services', element: <Services /> },
  { path: 'portfolio', element: <Portfolio /> },
  { path: 'team', element: <Team /> },
  { path: 'testimonials', element: <Testimonials /> },
  { path: 'contact', element: <ContactUs /> },
]);

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App;
