
import React from 'react';  

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'


import App from './App.jsx'

const AnotherElement = (
  <a href="https://google.com" target='_blank'>Visite google</a>
)



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {AnotherElement} 
   
  </StrictMode>,
)