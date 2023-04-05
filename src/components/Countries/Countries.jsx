import { useContext } from 'react'
import { ThemeContext } from '../../context/ThemeContext'
import { CountriesView, CountryDetails } from '../'
import { useContriesCtx, useThemeContext } from '../../hooks'

const Countries = () => {
  const { theme } = useThemeContext()
  const {
    countriesList,
    showCountryDetails,
    hideCountryDetails,
    selectedCountry
  } = useContriesCtx()

  return (
    <div className={ ` ${ theme === 'light' ? ' bg-gray-50' : 'bg-black-100 text-white-50 ' }  min-h-full pt-16` }>
      {
        showCountryDetails ? (
          <CountryDetails
            onClick={ hideCountryDetails }
            country={ selectedCountry }
          />
        ) : (
          <CountriesView
            countries={ countriesList }
          />
        )
      }
    </div>
  )
}

export default Countries