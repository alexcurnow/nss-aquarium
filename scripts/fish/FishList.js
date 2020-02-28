import { useFish } from './FishDataProvider.js'
import Fish from './Fish.js'

const FishList = () => {
  let contentElement = document.querySelector('.fishList')
  const fishes = useFish()

    for (const fish of fishes) {
     contentElement.innerHTML += Fish(fish)
    }
}

export default FishList