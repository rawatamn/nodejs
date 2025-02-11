function fetchUserData(userId, callback) {
    console.log(`Fetching data for user ${userId}...`);

    // Simulating an API request with setTimeout (async operation)
    setTimeout(() => {
        const userData = {
            id: userId,
            name: "Aman Singh",
            email: "aman@example.com",
            posts: ["Post 1", "Post 2", "Post 3"]
        };
        
        // Call the callback function and pass the data
        callback(userData);
    }, 2000);
}

// Callback function to display user data
function displayUserData(user1) {
    console.log(`User Name: ${user1.name}`);
    console.log(`Email: ${user1.email}`);
    console.log("Recent Posts:", user1.posts);
}

// Fetch user data and pass displayUserData as a callback
fetchUserData("aman", displayUserData);
