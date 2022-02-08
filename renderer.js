const eName = document.querySelector('#electron')

const colors = ['red', 'orange', 'purple', 'blue', 'pink', 'brown', 'violet']

eName.addEventListener('click', () => {
  const color = colors[Math.floor(Math.random() * colors.length)]
  eName.style.color = color
})
