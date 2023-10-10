export function setDarkmode() {
  const isDark = getDarkmode();
  localStorage.setItem('Darkmode_class', JSON.stringify(!isDark))
  return !isDark
}

export function getDarkmode() {
  return JSON.parse(localStorage.getItem('Darkmode_class')) ?? false
}

export function darkmodeToggle(isDark) {
  const htmlElement = document.querySelector('html')
  if (isDark) {
    htmlElement.setAttribute('class', 'dark')
  }

  if (!isDark) {
    htmlElement.removeAttribute('class')
  }
}
