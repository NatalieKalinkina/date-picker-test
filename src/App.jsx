import React, { useState } from 'react'
import './App.css'
import { FormWithMUI } from './FormWithMUI'
import { FormWithMUI_useFormik } from './FormWithMUI_useFormik'

function App() {

  return (
    <div className='app'>
      {/* <FormWithMUI /> */}
      <FormWithMUI_useFormik />
    </div>
  )
}

export default App
