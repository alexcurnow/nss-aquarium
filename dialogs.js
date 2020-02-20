const initializeDetailButtonEvents = () => {
  const allCloseButtons = document.querySelectorAll('.button--close')
  for (const btn of allCloseButtons) {
    btn.addEventListener('click', theEvent => {
      const dialogueElement = theEvent.target.parentNode
      dialogueElement.close()
    })
  }
  // Show Bart's details when the button is clicked
  document
    .querySelector('#button--nasty')
    .addEventListener('click', theClickEvent => {
      const theDialog = document.querySelector('#details--nasty')
      theDialog.showModal()
    })
  document
    .querySelector('#button--cyborg')
    .addEventListener('click', theClickEvent => {
      const theDialog = document.querySelector('#details--cyborg')
      theDialog.showModal()
    })
  document
    .querySelector('#button--spider')
    .addEventListener('click', theClickEvent => {
      const theDialog = document.querySelector('#details--spider')
      theDialog.showModal()
    })
  document
    .querySelector('#button--zeesh')
    .addEventListener('click', theClickEvent => {
      const theDialog = document.querySelector('#details--zeesh')
      theDialog.showModal()
    })
}

export default initializeDetailButtonEvents