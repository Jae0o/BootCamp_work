function ListCounter({ target }) {
  const pElement = document.createElement("p");
  target.appendChild(pElement);
  pElement.setAttribute("class", "header_listCounter")

  let { totalListsCount, completeCount } = getCount()

  this.setCount = () => {
    const {
      totalListsCount: newTotalListsCount,
      completeCount: newCompleteCount
    } = getCount()

    totalListsCount = newTotalListsCount
    completeCount = newCompleteCount

    this.render()
  }
  this.render = function () {
    pElement.textContent = `total list : ${totalListsCount} / complete list : ${completeCount}`
  }
  this.render()

}
