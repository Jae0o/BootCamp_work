function setItem(text) {
  // 새로운 리스트를 생성함
  const newList = { isComplete: false, text }

  // 기존의 데이터와 새로운 리스트와
  const lists = JSON.stringify([...getItem(), newList])

  localStorage.setItem("lists", lists)

}

function getItem() {
  return JSON.parse(localStorage.getItem("lists")) ?? []
}

function getCount() {
  const data = getItem()
  const totalListsCount = data.length
  const completeCount = data.filter((list) => list.isComplete === false).length

  return { completeCount, totalListsCount }
}

