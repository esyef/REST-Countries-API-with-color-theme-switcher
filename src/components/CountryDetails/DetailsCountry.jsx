const DetailsCountry = ({ label, value }) => {
  return (
    <li className='text-left'>
      <p className='text-sm'><strong>{ label }:</strong> <span>{ value }</span></p>
    </li>
  )
}

export default DetailsCountry