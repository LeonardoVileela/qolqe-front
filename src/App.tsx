import { useState } from 'react'
import { AuthProvider } from './context/AuthProvider/components'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {

  return (
    <>
      <AuthProvider>
        <Routes>
          <Route path="/profile" />


          <Route path="/login" />
        </Routes>
      </AuthProvider>
    </>
  )
}

export default App
