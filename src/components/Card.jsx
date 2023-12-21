import React, { useEffect, useState } from 'react'
import Clock from 'react-clock'
import 'react-clock/dist/Clock.css';

const Card = ({data}) => {
  
const [value, setValue] = useState(new Date());

useEffect(() => {
  const interval = setInterval( () => setValue(new Date()), 1000);

  return() => {
    clearInterval(interval);
  }
}, [])

  if(JSON.stringify(data) !== '{}'){
    return (
      <div className='mt-3 d-flex flex-column align-items-center'>
          <div className='my-2'>
            <Clock value={value} />
          </div>
          <h2>{data.name}, {data.sys.country}</h2>
          <h1><img src={ `https://api.openweathermap.org/img/w/${data.weather[0].icon}.png` } /> {data.main.temp} °C</h1>
          <p>{data.wind.speed} m/s</p>
          <p>{data.weather[0].main}</p>
          <p>Humidity: {data.main.humidity}%</p>
          <p>Visibility: {data.visibility / 1000}km</p>
      </div>
    )
  }else{
    return(<h1 className='text-center mt-3'>Loading.....</h1>)
  }
}

export default Card