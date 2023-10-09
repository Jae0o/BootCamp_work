// 다크모드에 따라 html 에 class = dark 를 지정하기 위한 함수
function darkmodeToggle(isDark) {
  // 매개변수 안에는 boolean 값이 담김
  const htmlElement = document.querySelector('html')

  if (isDark) {
    htmlElement.setAttribute(`class`, `Dark`)
  }
  if (!isDark) {
    htmlElement.removeAttribute("class")
  }
}

// localStorage에 있는 darkmode 값을 변경하기위한 함수
function setDarkMode() {
  // getDarkMode 를 호출해 현재 값을 불러옴
  const isDark = getDarkMode()
  // 그리고 현재 값에 반대되는 값을 다시 local에 저장함
  localStorage.setItem("DarkMode", JSON.stringify(!isDark))
  // 그리고 변경된 값을 반환함
  return !isDark
}

// 현재 Local 에 존재하는 darkmode 값을 불러옴
function getDarkMode() {
  // 만약 처음으로 darkmode 값을 불러온거라면 false를 불러옴
  return JSON.parse(localStorage.getItem("DarkMode")) ?? false
}
