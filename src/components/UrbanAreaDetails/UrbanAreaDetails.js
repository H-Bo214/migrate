import { useParams, useLocation } from "react-router-dom"

const UrbanAreaDetails = () => {
  let {cityName} = useParams()
  let location = useLocation()
  let { state } = location
  console.log('state', state)
  console.log('location', location)
  return (
    <div>
      <h2>This is UrbanAreaDetails for {cityName}</h2>
    </div>
  )
}

export default UrbanAreaDetails