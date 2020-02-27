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
    .querySelector('#button--Nasty')
    .addEventListener('click', theClickEvent => {
      const theDialog = document.querySelector('#details--Nasty')
      theDialog.showModal()
    })
  document
    .querySelector('#button--Cyborg')
    .addEventListener('click', theClickEvent => {
      const theDialog = document.querySelector('#details--Cyborg')
      theDialog.showModal()
    })
  document
    .querySelector('#button--Spider')
    .addEventListener('click', theClickEvent => {
      const theDialog = document.querySelector('#details--Spider')
      theDialog.showModal()
    })
  document
    .querySelector('#button--Zeesh')
    .addEventListener('click', theClickEvent => {
      const theDialog = document.querySelector('#details--Zeesh')
      theDialog.showModal()
    })
}

export default initializeDetailButtonEvents