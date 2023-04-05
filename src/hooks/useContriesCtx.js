import { useContext } from 'react'
import { CountriesContext } from '../context/CountriesContext'

export const useContriesCtx = () => {
  const {
    countriesList,
    searchCountry,
    handleChangeSearchCountry,
    hasSelectedCountry,
    selectedCountry,
    showCountryDetails,
    hideCountryDetails,
    handleSelectedRegiosChange,
    selectedRegion,
    countriesByRegion,
    filterCountries
  } = useContext(CountriesContext)

  return {
    countriesList,
    searchCountry,
    searchCountry,
    hasSelectedCountry,
    selectedCountry,
    showCountryDetails,
    hideCountryDetails,
    handleSelectedRegiosChange,
    selectedRegion,
    countriesByRegion,
    handleChangeSearchCountry,
    filterCountries
  }
}