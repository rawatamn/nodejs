const p1 = new Promise((resolve) => setTimeout(() => resolve("🚀 Task 1 Done"), 1000));
const p2 = new Promise((resolve) => setTimeout(() => resolve("✅ Task 2 Done"), 2000));
const p3 = new Promise((_,amn) => setTimeout(() => amn("🎉 Task 3 error"), 3000));

Promise.all([p1, p2, p3])
    .then((results) => console.log(results))
    .catch((error) => console.error("Error:", error));
