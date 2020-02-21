console.log('working!')

const collapseTravelDetails = () => {
  const details = document.querySelectorAll('.collapse')

  const button = document.querySelectorAll('.details-btn')

  for (const el of details) {
    el.style.display = 'none'
  }

  for (const btn of button) {
    btn.addEventListener('click', () => {
      for (const el of details) {
        el.style.display = 'block'
    }
  })
}
}

collapseTravelDetails()

// export default collapseTravelDetails
