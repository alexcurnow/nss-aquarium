import { useFish } from './FishDataProvider.js'
import Fish from './Fish.js'

const FishList = () => {
  const contentElement = document.querySelector('.fishList')
  const fishes = useFish()

    for (const fish of fishes) {
     contentElement.innerHTML += Fish(fish)
    }
  
}

export default FishList