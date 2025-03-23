import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import Home from './Navbar/pages/Home'
import About from './Navbar/pages/About'
import Contact from './Navbar/pages/Contact'
import Blog from './Navbar/pages/Blog'
import Navlayout from './Navbar/Layout/Navlayout'
import Notfound from './Navbar/Notfound'
import Signin from './Navbar/NavBtn/Signin'
import Login from './Navbar/NavBtn/Login'

function App() {

  const routers=createBrowserRouter(createRoutesFromElements(
    <Route path='/react-website/' element={<Navlayout/>}>
      <Route path='home' index element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='blog' element={<Blog/>}/>
      <Route path='contact' element={<Contact/>}/>
      <Route path='signin' element={<Signin/>} />
      <Route path='login' element={<Login/>} />
      <Route path='*' element={<Notfound/>}/>
      
    </Route>
  ))

  return (
    <>
      <RouterProvider router={routers}></RouterProvider>
    </>
  )
}

export default App
