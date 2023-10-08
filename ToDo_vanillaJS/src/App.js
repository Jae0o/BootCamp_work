// App 앱 전체에 어떤 component 들이 다루어지는지

function App() {

  const appElement = document.querySelector("#App")


  const state = getList()
  const listsCount = getCount()



  const header = new Header({
    target: appElement,
    state: listsCount
  });



  const todoList = new ToDoListBox({
    target: appElement,
    state,
    onEvent: (params) => {
      if (!!params?.deleteTarget) {
        // 삭제 구현!
        const newState = removeList(params.deleteTarget?.key)
        todoList.setState(newState)
      }

      if (params.hasOwnProperty('isComplete')) {
        const newState = changeComplete(params)
        todoList.setState(newState)
      }


      // Event로 인한 변동사항에 맞게 다시 Render 하도록
      const newCount = getCount()
      header.setState(newCount)
    }
  })



  new Footer({
    target: appElement,
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



new App()
