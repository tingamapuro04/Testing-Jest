const reverseString = (string) => {
  const wewe = []
  for (let i of string.split('')) {
    wewe.push(i)
  }
  let mimi = wewe.reverse()
  mimi = mimi.join('')
  return mimi
}

module.exports = reverseString;