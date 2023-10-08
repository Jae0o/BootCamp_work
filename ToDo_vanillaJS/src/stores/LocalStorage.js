function setList(text) {
  // key로 사용할 현재 시간을 만듬
  const key = new Date()
  // 새로운 리스트를 생성함
  const newList = { isComplete: false, text, key }

  // 기존의 데이터와 새로운 리스트를 한배열에 담고 JSON 파일형식으로 바꿔줌
  const lists = JSON.stringify([...getList(), newList])
  // localStorage에 담음
  localStorage.setItem("lists", lists)

}

function getList() {
  return JSON.parse(localStorage.getItem("lists")) ?? []
}

function getCount() {
  const data = getList()
  const totalListsCount = data.length
  const completeCount = data.filter((list) => list.isComplete).length

  return { completeCount, totalListsCount }
}


function removeList(key) {
  const filterd = [...getList()].filter((item) => item.key === key ? false : true)
  localStorage.setItem("lists", JSON.stringify(filterd))
  return filterd
}

function changeComplete({ key: checkKey }) {
  const newState = getList().map((list) => {
    let { isComplete, text, key } = list

    if (key === checkKey) {
      isComplete = !isComplete
    }

    return { isComplete, text, key }
  })

  localStorage.setItem("lists", JSON.stringify(newState))
  console.log(newState)
  return newState
}
