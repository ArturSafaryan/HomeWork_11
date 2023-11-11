function squarePromise(inputPromise) {
    return new Promise((resolve, reject) => {
      inputPromise
        .then((value) => {
          if (typeof value === 'number' || (typeof value === 'string' && !isNaN(value))) {
            const numberValue = Number(value);
            resolve(numberValue * numberValue);
          } else if (typeof value === 'string') {
            reject(`Cannot convert '${value}' to a number!`);
          } else {
            reject('Invalid input');
          }
        })
        .catch((error) => {
          reject(error);
        });
    });
  }
  
  const inputPromise1 = Promise.resolve(7);
  const inputPromise2 = Promise.resolve("10");
  const inputPromise3 = Promise.resolve("ertg");
  const inputPromise4 = Promise.reject(new Error("Error example"));
  
  squarePromise(inputPromise1)
    .then((result) => console.log(result))
    .catch((error) => console.error(error));
  
  squarePromise(inputPromise2)
    .then((result) => console.log(result))
    .catch((error) => console.error(error));
  
  squarePromise(inputPromise3)
    .then((result) => console.log(result))
    .catch((error) => console.error(error));
  
  squarePromise(inputPromise4)
    .then((result) => console.log(result))
    .catch((error) => console.error(error));
  