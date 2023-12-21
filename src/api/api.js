import axios from 'axios'

export const api = axios.create({
    baseURL : "https://api.openweathermap.org/data/2.5"
})

export const api_key = "6b1e83a2c33d304105e0b1216a15c4f5"