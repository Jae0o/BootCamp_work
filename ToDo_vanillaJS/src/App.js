// App 앱 전체에 어떤 component 들이 다루어지는지

function App() {

  const appElement = document.querySelector("#App")







  const header = new Header({
    target: appElement,
  });



  const todoList = new ToDoListBox({
    target: appElement
  })

  new Footer({
    target: appElement,
    onSubmit: (text) => {
      setItem(text)
      const newState = getItem()
      todoList.setSate(newState)
      header.setState()
      getCount()
    }
  })
}



new App()


