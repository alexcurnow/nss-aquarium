const Location = locationDetails => {
  return `
  <section class="harvest-locations__location">
    <img src=${locationDetails.image} alt="">
    <h3>${locationDetails.name}</h3>
    <button class="details-btn" id="${locationDetails.id}">Location Details</button>
    <div >
      <ul class="collapse">
        <li>climate: ${locationDetails.climate}</li>
        <li>coords: ${locationDetails.location}</li>
      </ul>
    </div>
  </section>
  `
}

export default Location