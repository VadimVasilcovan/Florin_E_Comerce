
import './App.css'
import {Route, Routes} from "react-router-dom"
import NavbarComponent from './navbar/navbar'
import HomePage from './home-page/home-page-components/home-page-components'
import OurCarsPage from './our-cars-page/our-cars-page-compenents/our-cars-page-components'

function App() {
  return<>
  <NavbarComponent/>
  <div>
    <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/cars" element={<OurCarsPage/>}/>
    </Routes>
  </div>
  </>
}

export default App
