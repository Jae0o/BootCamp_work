function ListCounter({ target, count }) {
  const pElement = document.createElement("p");
  target.appendChild(pElement);
  pElement.setAttribute("class", "header_listCounter")

  let { totalCount, completedCount } = count

  this.Refresh = ({
    totalCount: newTotalCount,
    completedCount: newCompletedCount
  }) => {
    totalCount = newTotalCount
    completedCount = newCompletedCount

    this.render()
  }

  this.render = function () {
    pElement.textContent = `total list : ${totalCount} / complete list : ${completedCount}`
  }
  this.render()

}
