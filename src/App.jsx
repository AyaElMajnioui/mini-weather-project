import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Navbar from './components/Navbar'
import Weather from './pages/Weather'
function App() {
  return (
    <>
     <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/weather' element={<Weather/>}/>
      </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
