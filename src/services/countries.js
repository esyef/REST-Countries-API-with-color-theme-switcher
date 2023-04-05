import axios from 'axios'

const BASE_URL = 'https://restcountries.com/v3.1/'
const FIELDS = 'name,capital,flags,region,languages,borders,population,currencies,nativeName,tld,cca3,subregion'
export const fetchCountries = async () => {
  try {
    const response = await axios.get(`${ BASE_URL }/all?fields=${ FIELDS }`)
    const data = response.data
    return data
  } catch (error) {
    console.log('Ha surgido un error al obtener los pasises', error)
    throw new Error('No se ha podido obtener los paises. Por favor, inténtalo de nuvo más tarde.')
  }
}

export const getBordersCountry = async (code) => {
  try {
    const request = axios.get(`${ BASE_URL }/alpha/?codes=${ code }&${ FIELDS }`)
    return request
  } catch (error) {
    console.log('Ha surgido un error al obtener los pasises', error)
    throw new Error('No se ha podido obtener los paises. Por favor, inténtalo de nuvo más tarde.')
  }
}