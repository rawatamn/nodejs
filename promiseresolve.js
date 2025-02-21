const myPromise = new Promise((resolve) => {
    setTimeout(() => {
      resolve("Promise Resolved!");  // Fulfills the promise
    }, 2000);
  });
  
  myPromise.then(console.log);  // Output after 2s: "Promise Resolved!"
  