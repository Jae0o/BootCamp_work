export default class ListCount {
  constructor({ target, state }) {
    this.pElement = document.createElement('p')
    this.pElement.setAttribute('class', 'header_listCounterA')
    const { totalCount, completedCount } = state


    this.pElement.textContent = `total lists : ${totalCount} / completed lists : ${completedCount}`
    target.appendChild(this.pElement)
  }
}
