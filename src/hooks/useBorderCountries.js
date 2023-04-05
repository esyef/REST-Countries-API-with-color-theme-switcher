import { useEffect, useState } from 'react'
import { getBordersCountry } from '../services/countries'

const useBorderCountries = (borders) => {
  const [ borderCountries, setBorderCountries ] = useState([])
  const [ isLoading, setIsLoading ] = useState(false)

  useEffect(() => {
    const fecthData = async () => {
      setIsLoading(true)
      const request = borders.map(code => getBordersCountry(code))
      const response = await Promise.all(request)
      const borderCountries = response.map(response => {
        if (response.statusText === "OK") {
          return response.data[ 0 ]
        }
        return null
      }).filter(country => country !== null)
      setIsLoading(false)
      setBorderCountries(borderCountries)
    }
    if (borders.length > 0) {
      fecthData()
    }

  }, [ borders ])

  return {
    borderCountries,
    isLoading
  }
}

export default useBorderCountries