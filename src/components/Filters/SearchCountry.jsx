import { useContext, useId } from 'react'
import { useContriesCtx, useThemeContext } from '../../hooks'
import { CiSearch } from 'react-icons/ci'
import { ThemeContext } from '../../context/ThemeContext'


const SearchCountry = () => {
  const { searchCountry, handleChangeSearchCountry } = useContriesCtx()
  const [ input ] = useId()
  const { theme } = useThemeContext()

  return (
    <section className='flex gap-4 items-center flex-wrap'>
      <label htmlFor={ input } className='font-bold'>
        Search for a country
      </label>

      <div className='relative max-w-[400px] drop-shadow-lg'>
        <input
          id={ input }
          className={ `${ theme === 'light' ? 'bg-white-50' : 'bg-black-50' } w-full py-5 px-16 text-sm  rounded-md` }
          placeholder='Colombia'
          value={ searchCountry }
          onChange={ handleChangeSearchCountry }
          aria-label='Search for a country'
          autoComplete='off'
          type='text'
          role='search'
          aria-required
        />

        <CiSearch className={ `absolute  bottom-[40%] left-[32px] stroke-2 ${ theme === 'light' ? 'fill-white-50 ' : 'fill-white-50' }` } />
      </div>

    </section>

  )
}

export default SearchCountry