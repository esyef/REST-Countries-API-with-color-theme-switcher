import { useBorderCountries, useThemeContext } from '../../hooks'
import BorderCountries from '../CountryDetails/BorderCountries'
import ListDetails from '../CountryDetails/ListDetails'
import { IoIosArrowRoundBack } from 'react-icons/io'


const CountryDetails = ({ onClick, country }) => {
  const { theme } = useThemeContext()
  const { name, flags, borders } = country
  const { borderCountries, isLoading } = useBorderCountries(borders)

  return (
    <section className='container mx-auto py-20 w-11/12 pt-16'>
      <button onClick={ onClick } className={ `rounded-md flex mb-16 md:mb-20 items-center ${ theme === 'light' ? 'bg-white-50' : 'bg-black-50' }  px-6 py-3 gap-2` }>
        <IoIosArrowRoundBack />
        Back
      </button>

      <article className='lg:flex gap-28 items-center'>
        <img src={ flags.svg } alt={ flags.alt } className='w-full object-cover lg:w-[560px] md:h-[400px] rounded-md mb-11 lg:mb-0' />
        <section className=''>
          <h1 className='font-extrabold text-3xl mb-8'>
            { name.common }
          </h1>

          <ListDetails country={ country } />

          <BorderCountries
            borderCountries={ borderCountries }
            borders={ borders }
            isLoading={ isLoading }
          />
        </section>
      </article>
    </section>
  )
}

export default CountryDetails

