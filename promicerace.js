const p1 = new Promise((_,reject) => setTimeout(reject, 100, "Error 1"));
const p2 = new Promise((resolve) => setTimeout(resolve, 200, "Success 2"));
const p3 = new Promise((resolve) => setTimeout(resolve, 300, "Success 3"));

Promise.race([p1, p2, p3])
.then(
    (value) => console.log(value),   // Success case
    (error) => console.error(error)  // Failure case (handled inside .then())
  );
