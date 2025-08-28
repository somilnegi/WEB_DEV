import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'

// Outlet is the dynamic placeholder where the child route component will render. It does not render anything by itself; it only renders whatever child route is currently active.
// It allows you to reuse a layout (header, footer, sidebar, etc.) for multiple pages without repeating the layout code.

const Layout = () => {
  return (
    <>
        <Header/>
        <Outlet/>
        <Footer/>
    </>
  )
}

export default Layout