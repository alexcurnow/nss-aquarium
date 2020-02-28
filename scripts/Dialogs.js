const initializeDetailButtonEvents = () => {
  const allCloseButtons = document.querySelectorAll('.button--close')
  for (const btn of allCloseButtons) {
    btn.addEventListener('click', theEvent => {
      const dialogueElement = theEvent.target.parentNode
      dialogueElement.close()
    })
  }
  // Show Bart's details when the button is clicked
  const allDetailButtons = document.querySelectorAll("button[id^='button--']")
  for (const btn of allDetailButtons) {
    btn.addEventListener('click', theEvent => {
      const dialogSiblingSelector = `#${theEvent.target.id}+dialog`
      const theDialog = document.querySelector(dialogSiblingSelector)
      theDialog.showModal()
    })
  }
}

export default initializeDetailButtonEvents
