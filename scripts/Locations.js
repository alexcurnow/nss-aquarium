const Location = locationDetails => {
  return `
  <section class="harvest-locations__location">
    <img src=${locationDetails.image} alt="">
    <h3>${locationDetails.name}</h3>
    <button class="details-btn" id="${locationDetails.id}">Location Details</button>
    <div class="collapse">
      <ul>
        <li>climate: ${locationDetails.climate}</li>
        <li>coords: ${locationDetails.coords}</li>
      </ul>
    </div>
  </section>
  `
}

export default Location