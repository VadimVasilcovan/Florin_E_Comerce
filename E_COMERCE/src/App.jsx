
import './App.css'
import {Route, Routes} from "react-router-dom"
import NavbarComponent from './navbar/navbar'
import HomePage from './home-page/home-page-components/home-page-components'
import CarCardHolder from './our-cars-page/car-info-card-holder/car-info-card-holder-components/car-info-card-holder-components'

function App() {
  return<>
  <NavbarComponent/>
  <div>
    <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/cars" element={<CarCardHolder/>}/>
    </Routes>
  </div>
  </>
}

export default App
