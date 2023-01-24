setTimeout(() => console.log('timeout'));

function myAsync(start = 0) {
  console.log(start)

  return Promise.resolve(start + 1).then(myAsync)
}

console.clear()
myAsync()
