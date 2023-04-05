import FilterRegions from './FilterRegions'
import SearchCountry from './SearchCountry'

const Filters = () => (
  <section className='flex gap-8 justify-between flex-wrap mb-12'>
    <SearchCountry />
    <FilterRegions />
  </section>
)

export default Filters