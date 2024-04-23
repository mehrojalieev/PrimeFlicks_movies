import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './scss/index.scss'
import { BrowserRouter } from 'react-router-dom'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { client } from './utils/Utils.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <QueryClientProvider client={client}>
      <App />
    </QueryClientProvider>
  </BrowserRouter>
)



// API KEY AUTH - cefa77cccae8ebb6128a5b7f9b2e861c
// ACCESS TOKEN AUTH - eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZWZhNzdjY2NhZThlYmI2MTI4YTViN2Y5YjJlODYxYyIsInN1YiI6IjY1MDEzMmQ1NmEyMjI3MDExYTdiMGU0ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.R1GyAWwnaKpO_Lc_6mcPj1JFIhfJeu29rIK5V7qUk1I