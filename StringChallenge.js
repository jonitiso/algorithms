function StringChallenge(str1, str2) {
  console.log('str1', 'str2')
  const arr1 = str1.split('')
  const arr2 = str2.split('')
  const dict = {}
  arr1.forEach((e) => {
    dict[e] = 0
  })
  arr1.forEach((e) => {
    dict[e]++
  })
  arr2.forEach((e) => {
    if (dict[e] > 0) {
      dict[e]--
    } else {
      dict[e]++
    }
  })
  console.log(dict)
  if (Object.values(dict).every((e) => !e)) {
    return true
  } else {
    return false
  }
}

StringChallenge('hola', 'hlao');
