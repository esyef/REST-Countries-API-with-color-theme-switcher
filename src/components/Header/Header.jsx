import IconType from './IconType';
import { useThemeContext } from '../../hooks';

const Header = () => {
  const { theme, changeThemeColor } = useThemeContext()

  return (
    <header className={ `${ theme === 'light' ? 'bg-white-50 text-black-100' : 'bg-black-50 text-white-50' } drop-shadow-md  fixed top-0  left-0 right-0 z-30` }>
      <div className='flex justify-between container mx-auto w-11/12 py-10 '>
        <h1>
          Where in the world?
        </h1>
        <button onClick={ changeThemeColor } className='flex items-center gap-2'>
          <span>
            <IconType theme={ theme } />
          </span>  Mode { theme === 'light' ? 'Dark' : 'Light' }
        </button>
      </div>

    </header >
  )
}

export default Header