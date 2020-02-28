const Location = locationDetails => {
  return `
  <section class="harvest-locations__location">
    <img class="harvest-locations__image" src=${locationDetails.image} alt="">
    <h3>${locationDetails.name}</h3>
    <button class="details-btn" id="button--${locationDetails.id}">Location Details</button>
    <dialog class="dialog--fish" id="details--${locationDetails.name}">
      <ul>
        <li>Climate: ${locationDetails.climate}</li>
        <li>Location: ${locationDetails.location}</li>
      </ul>
      <button class="button--close">Close Dialog</button>
    </dialog>
  </section>
  `
}

export default Location