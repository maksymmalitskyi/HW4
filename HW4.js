function generateRandomNumbers(count) {
    let evenCount = 0;
    let oddCount = 0;
  
    for (let i = 0; i < count; i++) {
      let randomNumber = Math.floor(Math.random() * 901) + 100;
  
      if (randomNumber % 2 === 0) {
        evenCount++;
      } else {
        oddCount++;
      }
    }
  
    const evenPercentage = ((evenCount / count) * 100).toFixed(2);
    const oddPercentage = ((oddCount / count) * 100).toFixed(2);
  
    console.log("Even count:", evenCount);
    console.log("Odd count:", oddCount);
    console.log("Even percentage:", evenPercentage + "%");
    console.log("Odd percentage:", oddPercentage + "%");
  }
  
  generateRandomNumbers();