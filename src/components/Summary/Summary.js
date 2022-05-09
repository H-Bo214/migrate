const Summary = ( { summary } ) => {
  const parsedSummary = summary.replace(/<[^>]+>/g, '')
  return (
    <section className="summary-container">
      <p>{parsedSummary}</p>
    </section>
  )
}

export default Summary