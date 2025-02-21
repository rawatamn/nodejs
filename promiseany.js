const p1 = new Promise((_, reject) => setTimeout(reject, 100, "Error 1"));
const p2 = new Promise((resolve) => setTimeout(resolve, 200, "Success 2"));
const p3 = new Promise((resolve) => setTimeout(resolve, 300, "Success 3"));

Promise.any([p1, p2, p3])
  .then(console.log) // ✅ "Success 2" (first resolved promise)
  .catch(console.error);
