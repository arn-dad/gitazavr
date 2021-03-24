const fs = require('fs')

const findTargetStringFromSource = (str) => {
  fs.readFile('./notes.txt', 'utf8' , (err, data) => {
    if (err) {
      console.error(err)
      return
    }
    console.log(data)
  
    const content = data.split("\n")
    let maxValue = 0;
    let target = -1;
    content.forEach((row, index) => {
      if(row.match(str)) {
        if(row.match(str).index > maxValue) {
          maxValue = row.match(str).index;
          target =  row.match(str).input;
        }
      }
    })
    console.log('---target---', target);
    return target;
  })
}

const output = findTargetStringFromSource('target')
