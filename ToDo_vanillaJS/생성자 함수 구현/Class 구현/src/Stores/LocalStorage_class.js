export function setList(text) {
  const key = new Date()
  const newList = {
    isCompleted: false,
    text,
    key
  }
  const prevList = getList();
  localStorage.setItem("ToDoList_class", JSON.stringify([...prevList, newList]))
}

export function getList() {
  return JSON.parse(localStorage.getItem("ToDoList_class")) ?? []
}

export function deleteList(key) {
  const prevList = getList();
  const newState = prevList.filter((list) => list.key === key ? false : true)
  localStorage.setItem('ToDoList_class', JSON.stringify(newState))
  return newState
}

export function getCount() {
  const Lists = getList();
  const totalCount = Lists.length;
  const completedCount = Lists.filter((list) => list.isCompleted).length
  return { totalCount, completedCount }
}

export function completedToggle(checkKey) {
  const Lists = getList().map((list) => {
    if (list.key === checkKey) {
      const newList = {
        key: list.key,
        isCompleted: !list.isCompleted,
        text: list.text
      }
      return newList
    }
    return list
  })

  localStorage.setItem('ToDoList_class', JSON.stringify(Lists));
  return Lists
}

export function deleteALL() {
  localStorage.setItem('ToDoList_class', JSON.stringify([]))
  return []
}
