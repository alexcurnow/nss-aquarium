const collapse = () => {
  const button = document.getElementById('button-1')
  const list = document.getElementById('collapsable-1')
  button.addEventListener('click', evt => {
    console.log(list)
    if (evt.target != null) {
      list.style.display == 'none' ? list.style.display = 'block' : list.style.display = 'none'
    } 
  })
}

// const collapse = event => {
//   event.target.style.visibility = 'visible'
//   console.log(event)
// }

// const collapse = (evt) => {
//   evt.target.style.display = 'block'
//   // const e = document.querySelector('.collapse')
//   // console.log(e)
//   const button = document.querySelectorAll('.details-btn')[0]
//   // console.log(button)
//   button.addEventListener('click', collapse)
//   //  e.style.display == 'block' ? (e.style.display = 'none') : (e.style.display = 'block')
// }

// const collapse = evt => {
//   evt.target.style.display = 'block'

// const button = document.querySelectorAll('.details-btn')[0]
//   button.addEventListener('click', collapse, false)
// }

export default collapse
