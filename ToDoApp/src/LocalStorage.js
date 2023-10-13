const storage = window.localStorage

//전달 받은 value를 넣을때 사용함
export function saveItem(key, value) {
  try {
    storage.setItem(key, JSON.stringify(value))
    // error 처리
  } catch (e) {
    console.log(e)
  }
}

// 전달받은 데이터 넣기!
export function getItem(key, defaultValue) {
  try {
    const storedValue = storage.getItem(key)
    if (!storedValue) {
      return defaultValue;
    }
    const parsedValue = JSON.parse(storedValue)
    return parsedValue
  } catch (e) {
    return defaultValue
  }
}

// 데이터 전체 삭제
export function removeItem(key) {
  storage.removeItem(key)
}
