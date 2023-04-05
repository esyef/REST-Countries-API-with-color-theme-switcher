
import { useThemeContext } from '../../hooks/useThemeContext'
import { generateCountryPreview } from '../../utils'
import DetailsCountry from './DetailsCountry'

const CountryPreview = ({ country, onClick }) => {
  const { flags, name } = country
  const { theme } = useThemeContext()
  const fields = generateCountryPreview(country)

  return (
    <li>
      <button onClick={ onClick } className={ ` ${ theme === 'light' ? 'bg-white-50' : ' bg-black-50' } w-full shadow hover:shadow-lg hover:scale-105 transition duration-150 rounded-md` }>
        <img src={ flags.svg } alt={ flags.alt } className='h-40 w-full object-cover mb-4 rounded-t-lg self-center' />
        <article className='p-6 pb-12'>
          <h1 className='mb-4 text-left text-lg font-extrabold'> { name.common }</h1>
          <ul>
            {
              fields.map(field => (
                <DetailsCountry
                  label={ field.label }
                  value={ field.value }
                  key={ field.key }
                />
              ))
            }
          </ul>
        </article>
      </button>
    </li>
  )
}

export default CountryPreview