import PropTypes from "prop-types"

const Error = ({ errorMsg }) => {
  return <h1>{errorMsg}</h1>
}

Error.propTypes = {
  errorMsg: PropTypes.string
}

export default Error
