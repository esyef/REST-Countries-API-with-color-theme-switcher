import { generateCountryDetails } from '../../utils'
import DetailsCountry from './DetailsCountry'

const ListDetails = ({ country }) => {
  const DETAILS = generateCountryDetails(country)
  const firstFiveItems = DETAILS.slice(0, DETAILS.length - 3)
  const restItems = DETAILS.slice(-3)
  return (
    <section className='grid grid-cols-1 gap-y-8 md:grid-cols-2 md:gap-y-0 md:gap-x-28 mb-16'>
      <ul>
        {
          firstFiveItems.map(detail => (
            <DetailsCountry
              key={ detail.key }
              label={ detail.label }
              value={ detail.value }
            />
          ))
        }
      </ul>

      <ul>
        {
          restItems.map(detail => (
            <DetailsCountry
              key={ detail.key }
              label={ detail.label }
              value={ detail.value }
            />
          ))
        }
      </ul>
    </section>
  )
}

export default ListDetails