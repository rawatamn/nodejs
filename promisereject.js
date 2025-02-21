const promise = new Promise((resolve, reject) => {
    reject("Error occurred!");
  });
  
  promise.catch((error) => console.log(error));
  