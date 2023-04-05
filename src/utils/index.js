export const formatNumber = (number) => {
  return new Intl.NumberFormat().format(number)
}

export const generateCountryDetails = (country) => {
  const DETAILS = [
    { key: 'nativename', label: 'Native Name', value: country.name.official },
    { key: 'population', label: 'Population', value: formatNumber(country.population) },
    { key: 'region', label: 'Region', value: country.region },
    { key: 'subregion', label: 'Sub Region', value: country.subregion },
    { key: 'capital', label: 'Capital', value: country.capital[ 0 ] },
    { key: 'tld', label: 'Top Level Domain', value: country.tld },
    { key: 'currencies', label: 'Currencies', value: country.currencies ? Object.values(country.currencies)[ 0 ]?.name ?? 'N/A' : 'N/A' },
    { key: 'languages', label: 'Languages', value: Object.values(country.languages).join(', ') }
  ]
  return DETAILS
}

export const generateCountryPreview = (country) => {
  const ListOfPreview = [
    { key: 'name', label: 'Population', value: formatNumber(country.population) },
    { key: 'region', label: 'Region', value: country.region },
    { key: 'capital', label: 'Capital', value: country.capital ? country.capital[ 0 ] : 'N/A' },
  ]
  return ListOfPreview
}
