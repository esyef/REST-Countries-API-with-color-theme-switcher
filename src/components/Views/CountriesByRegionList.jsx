import { useContriesCtx } from '../../hooks'
import CountryPreview from '../CountryDetails/CountryPreview'
import Message from '../Message'

const CountriesByRegionList = ({ list }) => {
  const {
    hasSelectedCountry
  } = useContriesCtx()

  return (
    <>
      {
        list.length === 0 ? (
          <Message />
        ) : (list.map(({ cca3, ...country }) => (
          <CountryPreview
            country={ country }
            onClick={ () => hasSelectedCountry(country) }
            key={ cca3 }
          />
        )))
      }
    </>
  )
}

export default CountriesByRegionList