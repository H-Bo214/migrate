import { useParams } from "react-router-dom"

const UrbanAreaDetails = () => {
  let {name} = useParams()
  return (
    <div>
      <h2>This is UrbanAreaDetails for  {name}</h2>
    </div>
  )
}

export default UrbanAreaDetails