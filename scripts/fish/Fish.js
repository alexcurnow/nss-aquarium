const Fish = fish => {
  return `
  <section class="fishList__card">
          <img 
            class="fishList__image"
            src="${fish.image}"
            alt=""
          />
          <h3>${fish.name}</h3>
      
            <button class="details-btn" id="button--${fish.name}">Details</button>
          <dialog class="dialog--fish" id="details--${fish.name}">
            <ul>
              <li>Species: ${fish.species}</li>
              <li>Location: ${fish.location}</li>
              <li>Length: ${fish.length}</li>
              <li>Food: ${fish.food.join(", ")}</li>
            </ul>
            <button class="button--close">Close Dialog</button>
          </dialog>
        </section>
  `
}

export default Fish