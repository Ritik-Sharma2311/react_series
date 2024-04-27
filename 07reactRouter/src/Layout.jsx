import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import {Outlet} from 'react-router-dom'

// What does react-router-DOM outlet do?

// The React Router <Outlet/> component (from react-router-dom ) is used within the parent route element to indicate where a child route element should be rendered. The given example creates a <Route> at the root path / that renders an element <Root/> and a child route on the path /home .

function Layout() {
  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
 
    </>
  )
}

export default Layout