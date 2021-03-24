const validateSyntax = (str) => {
  let output = 'VALID';
  const map = { '(': 0, ')': 0 };
  const array = Array.from(str)
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if(element === ')' && index === 0 ||
        element === '(' && array.length - 1 === index
      ) {
      output = 'INVALID'
      break
    }

    if(element === '(') {
      map[element] += 1
    }

    if(element === ')') {
      map[element] += 1
    }

    if(map["("] > 0) {
      map["("] -=1
    }
    if(map[")"] > 0) {
      map[")"] -=1
    }
  }

  if (map["("] > 0 || map[")"] > 0) {
    output = 'INVALID'
  }
  console.log("~ map", map);
  return output;
}

const output = validateSyntax('((10 * 5)( +()) ((5 - 2))))')
console.log("~ output", output);