"use strict";

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n')
const [N, M] = input.shift()
const graph = Array.from({ length: +N + 1 }, () => [])

for (const [start, _, end] of input) {
  graph[+start].push(+end)
  graph[+end].push(+start)
}

const check = Array.from({ length: +N + 1 }, () => true)
check[0] = false
let count = 0;

for (let i = 0; i <= N; i += 1) {

  if (check[i]) {
    count++
    const stack = [i]
    check[i] = false

    while (stack.length !== 0) {
      const value = stack[stack.length - 1]
      if (!check[value] && graph[value].length !== 0) {
        stack.push(graph[value].pop())
      } else {
        check[stack.pop()] = false
      }
    }
  }
}

console.log(count)
