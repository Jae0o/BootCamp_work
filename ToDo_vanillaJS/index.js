// 초기의 데이터를 넣고 관리하는 js
// App을 실행

const state = {
  listCount: 2,

  list: [
    {
      text: "테스트용 item 1",
      isComplete: true
    },
    {
      text: "item 2 테스트용",
      isComplete: false
    }
  ]
}

const bodyElement = document.querySelector("body")
new App({ target: bodyElement, state })