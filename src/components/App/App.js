import { Routes, Route, useLocation } from 'react-router-dom'
import HomePage from '../HomePage/HomePage'
import UrbanAreaDetails from '../UrbanAreaDetails/UrbanAreaDetails'
import './App.css'
import Error from '../Error/Error'

//Used for React Router testing in App.test.js
export const LocationDisplay = () => {
  const location = useLocation()
  return <div 
    className ='location'
    data-testid="location-display"
  >
    {location.pathname}
  </div>
}

function App() {
  const error = 'Page not found. Please return to the home page'
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/urbanAreaDetails/:cityName' element={<UrbanAreaDetails />}/>
        <Route path ='*' element={<Error errorMsg={error}/>} />
      </Routes>
      <LocationDisplay />
    </>
  )
}

export default App
