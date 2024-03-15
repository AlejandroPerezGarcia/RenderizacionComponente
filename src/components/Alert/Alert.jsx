const Alet = ({ message, color }) => {
  return (
    <div className={`alert alert-${color}`} role='alert'>
      {message}
    </div>
  )
}

export default Alet
