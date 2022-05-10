import './Summary.css'

const Summary = ( { summary } ) => {
  const parsedSummary = summary.replace(/<[^>]+>/g, '')
  return (
    <section className="summary-container">
      <p className='summary'>{parsedSummary}</p>
    </section>
  )
}

export default Summary