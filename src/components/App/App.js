import { Routes, Route } from 'react-router-dom'
import HomePage from '../HomePage/HomePage'
import UrbanAreaDetails from '../UrbanAreaDetails/UrbanAreaDetails'
import Error from '../Error/Error'

function App() {
  const error = 'Page not found. Please return to the home page'
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/urbanAreaDetails/:cityName' element={<UrbanAreaDetails />}/>
        <Route path ='*' element={<Error errorMsg={error}/>} />
      </Routes>
    </>
  )
}

export default App;
