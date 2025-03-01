function fetchUserData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({name: "Somil", url: "https://facebook.com"})
        }, 3000);
    })
}

async function getUserData() {
    try {
        console.log("Fetching User Data...");
        const userData = await fetchUserData()
        console.log("USer Data Fetched Successfully...");
        console.log("User Data: ", userData);
        
    } catch (error) {
        console.log("Error Fetching Data...");
    }
}

getUserData()