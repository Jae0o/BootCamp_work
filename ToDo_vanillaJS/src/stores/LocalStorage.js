function setList(text) {
  // key로 사용할 현재 시간을 만듬
  const key = new Date()
  // 새로운 리스트를 생성함
  const newList = { isCompleted: false, text, key }

  // 기존의 데이터와 새로운 리스트를 한배열에 담고 JSON 파일형식으로 바꿔줌
  const lists = JSON.stringify([...getList(), newList])
  // localStorage에 담음
  localStorage.setItem("TodoList", lists)

}

function getList() {
  return JSON.parse(localStorage.getItem("TodoList")) ?? []
}

function getCount() {
  const data = getList()
  const totalCount = data.length
  const completedCount = data.filter((list) => list.isCompleted).length

  return { completedCount, totalCount }
}


function removeList(key) {
  const filterd = [...getList()].filter((item) => item.key === key ? false : true)
  localStorage.setItem("TodoList", JSON.stringify(filterd))
  return filterd
}

function changeComplete({ key: checkKey }) {
  const newState = getList().map((list) => {
    let { isCompleted, text, key } = list

    if (key === checkKey) {
      isCompleted = !isCompleted
    }

    return { isCompleted, text, key }
  })

  localStorage.setItem("TodoList", JSON.stringify(newState))

  return newState
}
