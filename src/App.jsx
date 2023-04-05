import { Countries } from './components'
import { Header } from './components'
import { ThemeContext } from '../src/context/ThemeContext'
import { useContext } from 'react'



const App = () => {
  const { theme } = useContext(ThemeContext)
  return (
    <div className={ `${ theme === 'light' ? 'text-black-100' : 'text-white-50' } h-screen` }>
      <Header />
      <Countries />

      <footer className={ `${ theme === 'light' ? 'bg-white-50' : 'bg-black-50' } py-8 ` }>
        <p className='text-center'>
          Coder  <a href='https://yefweb.me/' target='_blanck'>Yefweb</a>
        </p>
      </footer>
    </div>
  )
}

export default App