function DarkMode({ target, onEvent }) {
  // button 요소 생성
  const buttonElement = document.createElement('button')
  target.appendChild(buttonElement)
  buttonElement.setAttribute('class', 'navbar_darkmodeButton')
  buttonElement.textContent = "DarkMode"

  // click이벤트가 발생하면 darkmodeToggle 이라는 값을 전달함
  // 이후에 App에서 해당 값이 존재한다면 darkmode 토글을 실행함
  buttonElement.addEventListener('click', () => {
    onEvent({ darkmodeToggle: true })
  })
}
