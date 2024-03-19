import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar';
import Footer from './Footer';
import About from './About';
import Services from './Services';
import Portfolio from './Portfolio';
import Team from './Team';
import Testimonials from './Testimonials';
import ContactUs from './ContactUs';

function RootLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <About />
      <Services />
      <Portfolio />
      <Team />
      <Testimonials />
      <ContactUs />
      <Footer />
    </>
  )
}

export default RootLayout
