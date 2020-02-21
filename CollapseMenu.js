const collapse = () => {
  const button = document.querySelector('.details-btn')
  
  button.addEventListener('click', () => {
    const e = document.querySelector('.collapse')
    e.style.display == 'block' ? e.style.display = 'none' : e.style.display = 'block'
  })
}

collapse()
