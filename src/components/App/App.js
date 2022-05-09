import { Routes, Route } from 'react-router-dom'
import HomePage from '../HomePage/HomePage'
import UrbanAreaDetails from '../UrbanAreaDetails/UrbanAreaDetails'
import Error from '../Error/Error'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/urbanAreaDetails/:cityName' element={<UrbanAreaDetails />}/>
        <Route path ='*' element={<Error />} />
      </Routes>
    </>
  )
}

export default App;
