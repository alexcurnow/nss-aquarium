import initializeDetailButtonEvents from './dialogs.js'
import { useFish } from './scripts/FishDataProvider.js'
import FishList from './scripts/FishList.js'

const allTheFish = useFish()
// import collapseTravelDetails from './CollapseMenu.js'
// collapseTravelDetails()

// initializeDetailButtonEvents()
FishList()
