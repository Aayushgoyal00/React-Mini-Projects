import React from 'react'
import ReactDOM from 'react-dom/client'
import Layout from './components/Layout.jsx'
import { About,Home ,Github,Contact ,Users} from './components/root.js'
// import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route,Router,RouterProvider } from 'react-router-dom'
import {githubInfo} from './components/Main Component/Github.jsx';

const router =createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='contact' element={<Contact/>}/>
      <Route path='users/:user' element={<Users/>}/>
      <Route path='github' loader={githubInfo} element={<Github/>}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
    {/* // <App /> */}
  </React.StrictMode>,
)
