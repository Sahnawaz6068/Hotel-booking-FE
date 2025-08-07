import { useState } from 'react'
import './App.css'
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'
import Home from './Components/page/Home'
import Hotels from './Components/page/Hotels'
import About from './Components/page/About'
import Footer from './Components/UI/Footer'
import Nav from './Components/Nav'
import Error from './Components/page/Error'
import HotelPage from './Components/page/HotelPage'
import SignIn from './Components/page/SignIn'
import BookRoom from './Components/page/BookRoom'
import AiMate from './Components/page/AiMate'

function Layout() {
  return (
    <>
      <Nav />
     <main className="pt-20 w-full min-h-screen bg-gray-100">
  <Outlet />
</main>

      <Footer />
    </>
  );
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path="/" element={<Home />} /> 
          <Route path='hotels' element={<Hotels />} />
          <Route path='about' element={<About />} />
          <Route path='login' element={<SignIn />} />
          <Route path='booking' element={<BookRoom/>} />
          <Route path='/hotel/:hotelId' element={<HotelPage/>}/>
          <Route path="/ai" element={<AiMate/>} />
        </Route>
        <Route path="*" element={<Error/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
