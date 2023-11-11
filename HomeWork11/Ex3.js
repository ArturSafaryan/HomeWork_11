
function FuncPromise(input) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (typeof input === 'string') {
          resolve(input.toUpperCase());
        } else {
          reject(input);
        }
      }, 500);
    });
  }
  
  const inputString = 'hello';
  const inputNumber = 42;
  
  const Promise1 = FuncPromise(inputString);
  const Promise2 = FuncPromise(inputNumber);
  
  Promise1
    .then((result) => {
      console.log('Resolved:', result);
    })
    .catch((error) => {
      console.log('Rejected:', error);
    });
  
  Promise2
    .then((result) => {
      console.log('Resolved:', result);
    })
    .catch((error) => {
      console.log('Rejected:', error);
    });
  


