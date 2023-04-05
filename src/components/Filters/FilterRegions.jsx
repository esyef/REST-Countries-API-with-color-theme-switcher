import { useState } from 'react'
import { useContriesCtx } from '../../hooks/useContriesCtx'
import { BiChevronDown } from 'react-icons/bi'
import { useThemeContext } from '../../hooks/useThemeContext'


const FilterRegions = () => {
  const [ dropDown, setDropDown ] = useState(false)
  const { handleSelectedRegiosChange } = useContriesCtx()
  const { theme } = useThemeContext()
  const REGION = [
    { key: 'europe', value: 'Europe' },
    { key: 'africa', value: 'Africa' },
    { key: 'americas', value: 'Americas' },
    { key: 'asia', value: 'Asia' },
    { key: 'oceania', value: 'Oceania' },
  ]

  return (
    <section className={ `${ theme === 'light' ? 'bg-white-50' : 'bg-black-50 ' }  relative rounded-md flex-shrink-0` }>
      <button onClick={ () => setDropDown((prev) => !prev) } className='flex gap-8 items-center  p-6'>
        Filter by Region
        <BiChevronDown />
      </button>

      {
        dropDown && (
          <ul className={ `${ theme === 'light' ? 'bg-white-50' : 'bg-black-50 ' } absolute py-5 px-6  w-full left-0 top-[5rem] z-20 shadow-2xl rounded-md text-current` }>
            {
              REGION.map(region => (
                <li key={ region.key } className='mb-2'>
                  <a href='#' onClick={ (e) => {
                    e.preventDefault()
                    handleSelectedRegiosChange(region.key)
                  } } className='font-semibold text-sm'>
                    { region.value }
                  </a>
                </li>
              ))
            }
            <button onClick={ () => handleSelectedRegiosChange('') } className='font-semibold text-sm'>
              All countries
            </button>
          </ul>
        )
      }

    </section>
  )
}

export default FilterRegions