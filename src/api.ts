const API_KEY = 'bd617664eab24edebcc182814231508'
const BASE_URL = 'http://api.weatherapi.com/v1'

export const getCurrentWeather = async function (city: string) {
  const data = await fetch(`${BASE_URL}/current.json?key=${API_KEY}&q=${city}&aqi=no`)
  const result = await data.json()
  return result.current
}

export const getForecastWeather = async function (city: string) {
  const data = await fetch(`${BASE_URL}/forecast.json?key=${API_KEY}&q=${city}&days=7&aqi=no&alerts=no`)
  const result = await data.json()
  return result.forecast.forecastday
}

export const searchCities = async function (query: string) {
  const data = await fetch(`${BASE_URL}/search.json?key=${API_KEY}&q=${query}`)
  return data.json()
}
