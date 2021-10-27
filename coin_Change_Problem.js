
function maximumCoinChange(coints,amount){

  let coint = [0,...coints]

  let num = -1000
  
  let amountRow = []
  for (let i = 0; i < coint.length; i++) {
    let group = []
    for (let j = 0; j <= amount; j++) {
      if (j == 0) {
        group[j] = 1
      } else if (i == 0) {
        group[j] = 0
      } else if (coint[i] > j) {
        group[j] = amountRow[i - 1][j]
      } else {
        let val = amountRow[i - 1][j] + group[j - coint[i]]
        group[j] = val
      }
      if (group[j] > num) {
        num = group[j]
      }
    }
    amountRow.push(group)
  
  }
  return num
}

console.log(maximumCoinChange([2,3,5,10],15))