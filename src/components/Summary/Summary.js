import "./Summary.css"
import PropTypes from "prop-types"

const Summary = ({ summary }) => {
  const parsedSummary = summary.replace(/<[^>]+>/g, "")
  return (
    <section className="summary-container">
      <p className="summary">{parsedSummary}</p>
    </section>
  )
}

Summary.propTypes = {
  summary: PropTypes.string
}

export default Summary
