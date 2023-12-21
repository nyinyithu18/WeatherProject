import React, { useState } from 'react'

const Form = ({apiCalling, errorMessage}) => {

  const [country, setCountry] = useState('')

  if(errorMessage !== ''){
    var message = `Can't find "${errorMessage}" country !`;
  }

  const changeCountryHandling = () =>{
    apiCalling(country)
    setCountry('')
  }

  return (
    <div>
      <div className='d-flex justify-content-around'>
        <input type="text" value={country} onChange={ (e) => setCountry(e.target.value)} placeholder='Enter Country.....' className='form-control mx-3'/>
        <button onClick={ () => changeCountryHandling()} className='btn btn-dark mx-3'>Search</button>
      </div>
      <p className='text-danger mt-2 ms-3'>{message}</p>
    </div>
  )
}

export default Form