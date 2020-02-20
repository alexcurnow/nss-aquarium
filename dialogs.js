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
    .querySelector('.details-btn')
    .addEventListener('click', theClickEvent => {
      const theDialog = document.querySelector('.dialog--fish')
      theDialog.showModal()
    })
}

export default initializeDetailButtonEvents