import CountriesList from './CountriesList'
import Filters from '../Filters/Filters'
import MessageFilterRegion from '../MessageFilterRegion'

const CountriesView = ({ countries }) => (
  <main className='container mx-auto w-11/12 py-12'>
    <Filters />
    <MessageFilterRegion />
    <CountriesList
      countries={ countries }
    />
  </main>
)


export default CountriesView