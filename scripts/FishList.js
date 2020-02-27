import { useFish } from './FishDataProvider.js'
import Fish from './Fish.js'

const FishList = () => {
  const contentElement = document.querySelector('.fishList')
  const fishes = useFish()

  let fishHTMLRepresentations = ""
    for (const fish of fishes) {
      Fish(fish)
    }

  contentElement.innerHTML += `
  ${fishHTMLRepresentations}
  `
}

export default FishList