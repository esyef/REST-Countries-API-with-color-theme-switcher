import { useContriesCtx, useThemeContext } from '../../hooks'

const BorderCountryButton = ({ value, onClick }) => {
  const { theme } = useThemeContext()
  return (
    <article className={ `${ theme === 'light' ? 'bg-white-50' : 'bg-black-50' } py-2 px-7` }>
      <button onClick={ onClick }>
        { value }
      </button>
    </article>
  )
}

const BorderCountries = ({ borders, borderCountries, isLoading }) => {
  const { hasSelectedCountry } = useContriesCtx()
  return (
    <section className='flex gap-2 flex-wrap items-center'>
      <p>
        <strong>Border Countries: </strong>
      </p>
      {
        borders.length === 0 ?
          ("This country doesn't have any borders")
          :
          (!isLoading ? (
            borderCountries.map(border => (
              <BorderCountryButton
                key={ border.cca3 }
                value={ border.name.common }
                onClick={ () => hasSelectedCountry(border) }
              />))
          ) : 'Cargando')
      }
    </section>
  )

}

export default BorderCountries