import { Outlet } from 'react-router'
import './App.css'
import React from 'react'
import Nav from './assets/composants/nav'


function App() {


  return (
    <>
      <Nav />

      <Outlet />
    </>
  )
}

export default App
