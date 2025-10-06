import React from 'react'
import { useRouteError } from 'react-router'
import Navbar from '../components/NavBar.jsx'
import Footer from '../components/Footer.jsx'

const ErrorPage = () => {
  const error = useRouteError()

  return (
    <>
      <Navbar />
      <div>{error.message}</div>
      <Footer />
    </>
  )
}

export default ErrorPage