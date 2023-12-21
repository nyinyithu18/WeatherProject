import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Form from "./components/Form";
import Card from "./components/Card";
import { api, api_key } from "./api/api";
import { useEffect, useState } from "react";

function App() {

  const [country, setCountry] = useState('Yangon')

  const [data, setData] = useState({})

  const [errorMessage, setErrorMessage] = useState('')

  const apiCalling = async(country_name) => {

    if(country_name !== undefined){
      setCountry(country_name);
    }
    
   try{
    const res = await api.get(`/weather?q=${country}&appid=${api_key}`);
    setData(res.data)
    setErrorMessage('')
   }catch(error){
    setErrorMessage(country)
   }
  
  }

  useEffect(() => {
    apiCalling()
  }, [country, errorMessage])

  

  return (
    <div className="w-full min-vh-100 d-flex justify-content-center align-items-center">
      <div className="shadow-lg bg-light p-3">
        <h2 className="text-center mb-4 mt-2">Weather App</h2>
        <Form apiCalling={apiCalling} errorMessage={errorMessage}/>
        <Card data={data}/>
      </div>
    </div>
  );
}

export default App;
