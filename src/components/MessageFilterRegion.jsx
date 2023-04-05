import { useContriesCtx } from '../hooks'

const MessageFilterRegion = () => {
  const { selectedRegion, countriesByRegion } = useContriesCtx()
  return (
    <>
      {
        countriesByRegion.length > 0 && <h2 className='mb-8'>
          Countries in  <span className='capitalize'> { selectedRegion }</span> { countriesByRegion.length }
        </h2>
      }
    </>

  )
}

export default MessageFilterRegion