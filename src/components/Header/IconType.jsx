import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs'

const IconType = ({ theme }) => (
  <>
    { theme === 'light' ?
      <BsFillMoonFill className='fill-black-50' />
      :
      <BsFillSunFill className='fill-white-50' />
    }
  </>
)

export default IconType