function darkmodeToggle(value) {
  const htmlElement = document.querySelector('html')

  if (value) {
    htmlElement.setAttribute(`class`, `Dark`)
  }
  if (!value) {
    htmlElement.removeAttribute("class")
  }
}
function setDarkMode() {
  const value = getDarkMode()
  localStorage.setItem("DarkMode", JSON.stringify(!value))
  return !value
}

function getDarkMode() {
  return JSON.parse(localStorage.getItem("DarkMode")) ?? false
}
