const rndNumberArray = [];
const length = 10;
for (let i = 0; i < length; i++) {
  rndNumber = Math.floor((Math.random() * 1000));
  rndNumberArray[i] = rndNumber;
}

console.log("=== Start random array ===")
console.log(rndNumberArray);
console.log("=== End random array ===")
