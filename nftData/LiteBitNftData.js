const fs = require('fs');
const path = require('path');
console.log(__dirname);

for (let i =  1; i <=  5; i++) {

  // Creates a JSON object for each NFT
  const json = {
      name: `LitBitToken Data #${i}`, 
      description: `LitBitTokenDescription #${i}`,
      image: `https://gateway.pinata.cloud/ipfs/QmQD92sFM956BbdLZn4s1Th8CAgfCvMhJL9Dsv95Rm6sBc/${i}.jpeg`,
      attributes: []
  };

  // Writes the JSON object to a file
  fs.writeFileSync(
    path.join(__dirname, 'LiteBitImgData', String(i)),
    JSON.stringify(json)
  );
}
