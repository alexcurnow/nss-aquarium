import useLocationDetails from './LocationsDataProvider.js'
import Location from './Locations.js'

const renderLocations = () => {
  const contentElement = document.querySelector('.harvest-locations')
  const locations = useLocationDetails()

  for (const locationObject of locations) {
    contentElement.innerHTML += Location(locationObject)
  }
}

export default renderLocations
