import { createContext, useEffect, useState } from 'react';
import { fetchCountries } from '../services/countries';
import axios from 'axios';

export const CountriesContext = createContext(null)

export const CountriesProvider = ({ children }) => {
  const [ countriesList, setCountriesList ] = useState([])
  const [ searchCountry, setSearchCountry ] = useState('')
  const [ selectedCountry, setSelectedCountry ] = useState({})
  const [ error, setError ] = useState(null)
  const [ showCountryDetails, setShowCountryDetails ] = useState(false)
  const [ selectedRegion, setSelectedRegion ] = useState(null)
  const [ countriesByRegion, setCountriesByRegion ] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchCountries()
        setCountriesList(data)
      } catch (error) {
        setError(true)
      }
    }
    fetchData()
  }, [])

  const handleChangeSearchCountry = (eve) => setSearchCountry(eve.target.value)

  const filterCountries = listCountries => {
    return listCountries.filter(country => country.name.common
      .toLocaleLowerCase()
      .includes(searchCountry.toLocaleLowerCase()))
  }

  const hasSelectedCountry = (object) => {
    if (Object.keys(object).length) {
      setSelectedCountry(object)
      setShowCountryDetails(true)
    }
  }

  const hideCountryDetails = () => {
    setSelectedCountry({})
    setShowCountryDetails(false)
  }

  const handleSelectedRegiosChange = (region) => {
    setSelectedRegion(region)
  }

  useEffect(() => {
    try {
      const getCountriesByRegion = async () => {
        const request = await axios.get(`https://restcountries.com/v3.1/region/${ selectedRegion }/?fields=name,capital,flags,region,languages,borders,population,currencies,nativeName,tld,cca3,subregion`)
        setCountriesByRegion(request.data)
      }

      if (selectedRegion) {
        getCountriesByRegion()
      }

    } catch (error) {
      setError(true)
    }

    if (!selectedRegion) {
      setCountriesByRegion([])
    }

  }, [ selectedRegion ])

  return (
    <>
      {
        error ? (
          <div>
            Error al cargar los datos
          </div>
        ) : (<CountriesContext.Provider value={ {
          countriesList,
          searchCountry,
          selectedCountry,
          showCountryDetails,
          countriesByRegion,
          selectedRegion,
          handleChangeSearchCountry,
          hasSelectedCountry,
          hideCountryDetails,
          handleSelectedRegiosChange,
          filterCountries
        } }>
          { children }
        </CountriesContext.Provider>)
      }
    </>
  )

}

export default CountriesProvider