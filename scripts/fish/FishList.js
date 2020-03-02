import {
  mostHolyFish,
  soldierFish,
  nonHolyFish
} from './FishDataProvider.js'
import Fish from './Fish.js'

const FishList = () => {
  let contentElement = document.querySelector('.fishList')

  const fishes = mostHolyFish().concat(soldierFish(), nonHolyFish())

  fishes.forEach(fish => (contentElement.innerHTML += Fish(fish)))
}

export default FishList
