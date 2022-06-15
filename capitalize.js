const capitalize = string => {
  const first = string[0].toUpperCase()
  return first.concat(string.slice(1,))
}

console.log(capitalize('olakira'))

module.exports = capitalize