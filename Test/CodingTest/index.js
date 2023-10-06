"use strict"

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n').sort((a, b) => +a - +b);
const result = [];
let count = 1;
for (let i = 0; i < 30; i += 1) {
  if (+input[i] !== count) {
    result.push(count)
    count += 1
  }
  count += 1
}
for (let i = 0; i < 2; i++) {
  console.log(result[i])
}







// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }
// class Queue {
//   constructor() {
//     this.front = null;
//     this.tail = null;
//     this.size = 0;
//   }
//   push(value) {
//     const newNode = new Node(value)

//     if (this.front === null) {
//       this.front = newNode;
//       this.tail = newNode;
//     } else {
//       this.tail.next = newNode;
//       this.tail = newNode;
//     }
//     this.size++
//   }
//   getFront() {
//     if (this.front === null) {
//       return -1
//     }
//     return this.front.value
//   }
//   getTail() {
//     if (this.tail === null) {
//       return -1
//     }
//     return this.tail.value
//   }
//   size() {
//     return this.size
//   }
//   shift() {
//     if (this.front === null) {
//       return -1
//     }
//     const value = this.front.value;
//     this.front = this.front.next;
//     this.size--
//     if (this.front === this.tail) {
//       this.tail = null
//     }
//     return value
//   }
// }
// const queue = new Queue();
// for (let i = 1; i <= input[0]; i++) {
//   const [order, value] = input[i].split(" ")
//   if (order === "push") {
//     queue.push(value)
//   } else if (order === "front") {
//     console.log(queue.getFront())
//   } else if (order === "pop") {
//     console.log(queue.shift())
//   } else if (order === "size") {
//     console.log(queue.size)
//   } else if (order === "back") {
//     console.log(queue.getTail())
//   } else if (order === "empty") {
//     if (queue.size === 0) {
//       console.log(1)
//     } else {
//       console.log(0)
//     }
//   }
// }
// console.log(queue.size)
