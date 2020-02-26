import collapse from './CollapseMenu.js'

const locationDetails = [
  {
    id: 0,
    locationName: 'Great Barrier Reef',
    climate: 'Warm',
    location: 'Australia',
    img: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fcdn-image.travelandleisure.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2F1600x1000%2Fpublic%2Fvideos%2Fgreat-barrier-reef-coral-gardener_0.jpg%3Fitok%3DIeWt4-od"
  },
  {
    id: 1,
    locationName: 'Belize Barrier Reef',
    climate: 'Very Warm',
    location: 'Belize',
    img: "https://www.chaacreek.com/sites/default/files/styles/home_carousel/public/great_belize_barrier_reef_aerial_shot_chaa_creek.jpg"
  },
  {
    id: 2,
    locationName: 'Apo Reef',
    climate: 'Hot',
    location: 'Phillipines',
    img: "https://4.bp.blogspot.com/-Wz24Z51rD8w/XBhebXHWAFI/AAAAAAAAD6I/RC-qGBcD0eQovG3Ws54TdXJFySssnQuRQCLcBGAs/s1600/Apo%2Breef%2Bheader.png"
  }
]

// const detailsButton = () => {
  //   const e = document.querySelector('.collapse')
  //   e.style.display == 'block' ? e.style.display = 'none' : e.style.display = 'block'
  // }
  

  const locations = document.querySelector('.harvest-locations') 
  
  const renderLocationCard = () => {
    locationDetails.forEach(e => {
      locations.innerHTML += `
      <section class="harvest-locations__location">
      <img src=${e.img} alt="">
      <h3>${e.locationName}</h3>
      <div class="btn-div">
      <button class="details-btn" id="button-${e.id}">Location Details</button>
      </div>
      <div class="collapse" id="collapsable-${e.id}">
      <ul class="collapsable">
      <li>Climate: ${e.climate}</li>
      <li>Location: ${e.location}</li>
      </ul>
      </div>
      </section>
      `
    })
  }
  
  renderLocationCard()
  console.log(locations)
  
  // const button = document.getElementById('button')
  // const list = document.querySelector('.collapsable')

  // const toggleList = () => list.style.display == 'none' ? list.style.display = 'block' : list.style.display = 'none'

  // button.addEventListener('click', toggleList)
  
  // const button = document.getElementsByClassName('details-btn')
  // console.log(button)
  // const show = e => e.target.style.display = 'visible'
  // button.addEventListener('click', show)
// const button = document.querySelector('.details-btn')
// button.addEventListener('click', collapse)

// const button = document.querySelector('.details-btn')
// button.target.addEventListener('click', collapse, false)




collapse()

