"use strict"





function setItem(text) {
  const request = indexedDB.open("TestIndexDB")

  request.addEventListener('success', function (e) {
    const DB = e.target.result;

    const store = DB.transaction("test", "readwrite").objectStore("test")

    store.add({
      text
    })

    store.add({
      text: text + 1
    })
  })
  request.addEventListener("upgradeneeded", function (e) {
    const DB = e.target.result;
    DB.createObjectStore("test", { keyPath: "id", autoIncrement: true })
  })
  request.addEventListener('error', (e) => { console.log(e) })

}


// setItem("Testcodefdsfds")


function getItem(id) {
  const request = indexedDB.open("TestIndexDB", 3)

  request.addEventListener('success', function (e) {
    const DB = e.target.result;
    const store = DB.transaction("test", "readonly").objectStore("test")

    const valueRequest = store.get(id)
    valueRequest.addEventListener("success", (e) => console.log(e.target.result))
  })
  request.addEventListener("upgradeneeded", function (e) {
    const DB = e.target.result;
    DB.createObjectStore("test", { keyPath: "id", autoIncrement: true })
  })
  request.addEventListener('error', (e) => { console.log(e) })
}


// getItem(3)


function getAll() {
  const request = indexedDB.open("TestIndexDB", 3)

  request.addEventListener('success', function (e) {
    const DB = e.target.result;
    const store = DB.transaction("test", "readonly").objectStore("test")

    const valueRequest = store.getAll()
    valueRequest.addEventListener("success", (e) => console.log(e.target.result))
  })
  request.addEventListener("upgradeneeded", function (e) {
    const DB = e.target.result;
    DB.createObjectStore("test", { keyPath: "id", autoIncrement: true })
  })
  request.addEventListener('error', (e) => { console.log(e) })
}

// getAll()


function getRemove(id) {
  const request = indexedDB.open("TestIndexDB", 3)

  request.addEventListener('success', function (e) {
    const DB = e.target.result;
    const store = DB.transaction("test", "readwrite").objectStore("test")

    const valueRequest = store.delete(id)
    valueRequest.addEventListener("success", (e) => console.log(e.target.result))
  })
  request.addEventListener("upgradeneeded", function (e) {
    const DB = e.target.result;
    DB.createObjectStore("test", { keyPath: "id", autoIncrement: true })
  })
  request.addEventListener('error', (e) => { console.log(e) })
}





function index() {

  const request = indexedDb.op
}
