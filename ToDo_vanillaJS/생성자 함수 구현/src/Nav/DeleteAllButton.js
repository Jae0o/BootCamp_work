function DeleteAll({ target, onEvent }) {

  // button 요소 생성
  const buttonElement = document.createElement('button')
  target.appendChild(buttonElement)
  buttonElement.setAttribute('class', 'navbar_deleteAllButton')
  buttonElement.textContent = "Delete All"

  // click 이벤트 발생시 사용자에게 정말 삭제할지 확인을 위한 메세지 전송
  // 승인을 받게되면 전달받은 onEvent 실행과 deleteAll 이라는 값을 가진 객체를 인수로 전송
  // App에서 deleteAll 이라는 값을 확인하면 list 전체 삭제를 진행
  buttonElement.addEventListener('click', () => {
    confirm("delete All ?") ? onEvent({ deleteAll: true }) : ""

  })
}
