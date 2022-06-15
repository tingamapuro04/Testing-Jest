const stringLength = (string) => {
  const splited = []
  for (let i of string.split('')) {
    splited.push(i)
  }
  if (splited.length<1 || splited.length>10) {
    return 'inegi'
  } else {
    return splited.length
  }
  
}

console.log(stringLength('mobutu is adoyo'))

module.exports = stringLength