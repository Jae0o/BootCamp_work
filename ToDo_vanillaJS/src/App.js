// App 앱 전체에 어떤 component 들이 다루어지는지

function App({ target }) {
  // 생성자 함수호출시 new 미기재를 방지하기 위한 코드
  if (!new.target) {
    throw Error("생성자 함수에 new 기재 안함!")
  }

  // app Element 생성과 target 연결 그리고 id 속성 부여
  const appElement = document.createElement("div")
  target.appendChild(appElement)
  appElement.setAttribute("id", "app")

  const darkmodeState = getDarkMode()
  if (darkmodeState) {
    darkmodeToggle(darkmodeState)
  }

  // 맨처음 rendering 되는 순간 list 들을 담은 state
  // list들의 총 갯수 / 완료된 리스트 갯수 를 담은 listCount 변수 생성
  const state = getList()
  const listsCount = getCount()

  // header를 생성하며 target은 app / 전달 상태값은 listCount
  const header = new Header({
    target: appElement,
    state: listsCount
  });

  // Darkmode / 모든 리스트를 삭제하기 위한 버튼
  const navbar = new Navbar({
    target: appElement,
    onEvent: (params) => {
      if (params.isDarkMode) {
        const darkmodeState = setDarkMode()
        darkmodeToggle(darkmodeState)
      }
    }
  })

  // list 들을 담을 todoList component 호출 target 은 app
  const todoList = new ToDoListBox({
    target: appElement,
    // 상태는 list들을 담은 state 전달
    state,
    // todolist들 안에서 일어난 event들에 대한 동작 함수
    onEvent: (params) => {
      // 삭제 버튼에서 발생한 이벤트여서 deleteTarget 이라는 프로퍼티는 가지고 있는지 검사하는 조건문
      if (params.hasOwnProperty("isDelete")) {
        // removeList 함수를 통해 전달받은 key를 통해 리스트를 삭제함
        // 삭제된후의 리스트들을 반환하기때문에 리스트들을 담은 newState 라는 변수에 할당
        const newState = removeList(params?.key)
        // 그리고 상태변화를 위해 setState 에 새로운 리스트를 전달함
        todoList.setState(newState)
      }

      // 삭제 로직과 비슷하게 isCompleted 프로퍼티가 params에 담겨있다면 complete 뱐경로직 실행
      if (params.hasOwnProperty('isCompleted')) {
        // chagaeComplete 함수를 통해 대상 리스트의 isCompleted 를 변경해주고
        // 새로운 리스트를 newState에 담아 todoList의 상태를 변화함
        const newState = changeComplete(params)
        todoList.setState(newState)
      }

      // 삭제 / 변경 Event 모두 Count가 변화 되기때문에
      // Evnet로인한 변동사항에 맞게 다시 Render 하도록 아래와같이 실행
      const newCount = getCount()
      header.setState(newCount)
    }
  })

  // form / input 관련 footer 생성자 함수 호출
  new Form({
    target: appElement,
    // 만약 submit Event 가 발생했을때의 처리를 위한 함수
    onSubmit: (text) => {
      // 전달받은 text 를 통해 새로운 list 생성
      setList(text)
      // getList 를 통해 추가된 list들을 받아옴
      const newState = getList()
      // 이후 todoList 가 새로운 list를 rendering 하도록 setState에 전달
      todoList.setState(newState)
      // header에 존재하는 count 또한 다시 rendering 되도록
      const newCount = getCount()
      header.setState(newCount)
    }
  })

}

