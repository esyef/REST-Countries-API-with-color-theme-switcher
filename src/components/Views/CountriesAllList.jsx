import { useContriesCtx } from '../../hooks'
import CountryPreview from '../CountryDetails/CountryPreview'

const CountriesAllList = ({ list }) => {
  const {
    hasSelectedCountry
  } = useContriesCtx()
  return (
    <>
      {
        list.map(({ cca3, ...country }) => (
          <CountryPreview
            key={ cca3 }
            country={ country }
            onClick={ () => hasSelectedCountry(country) }
          />
        ))
      }
    </>
  )
}

export default CountriesAllList