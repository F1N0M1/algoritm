const rndNumberArray = [];

for (let i = 0; i < 10000; i++) {
  rndNumber = Math.floor((Math.random() * 1000));
  rndNumberArray[i] = rndNumber;
}

console.log("=== Start random array ===")
console.log(rndNumberArray);
console.log("=== End random array ===")
