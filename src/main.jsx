import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import '../node_modules/bootstrap/dist/css/bootstrap.css'

// index.js or App.js 
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // important for dropdown


import { BrowserRouter } from 'react-router-dom'

import DataState from './context/DataState.jsx'


createRoot(document.getElementById('root')).render(

  <StrictMode>
  <DataState>
      <BrowserRouter>
      <App />
    </BrowserRouter>
  </DataState>
  </StrictMode>

)
