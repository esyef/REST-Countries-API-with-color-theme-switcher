import { useContriesCtx } from '../../hooks'
import CountriesByRegionList from '../Views/CountriesByRegionList'
import CountriesAllList from '../Views/CountriesAllList'

const CountriesList = ({ countries }) => {
  const {
    selectedRegion,
    countriesByRegion,
    filterCountries
  } = useContriesCtx()

  const filterAllCountries = filterCountries(countries).sort(() => 0.5 - Math.random()).slice(0, 48)
  const filterCountriesByRegion = filterCountries(countriesByRegion)

  return (
    <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16'>
      {
        selectedRegion ? (
          <CountriesByRegionList
            list={ filterCountriesByRegion }
          />
        ) :
          (<CountriesAllList
            list={ filterAllCountries }
          />)
      }
    </ul >)
}

export default CountriesList