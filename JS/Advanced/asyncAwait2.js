function fetchPostData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Post Data Fetched")
        }, 2000);
    })
}

function fethCommentData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Comment Data Fetched")
        }, 3000);
    })
}

async function getBlogData() {
    try {
        console.log("Fetching the Blog data");
        // const postData = await fetchPostData()
        // const commentData = await fethCommentData()
        const [postData, commentData] = await Promise.all([fetchPostData(), fethCommentData()])
        console.log(postData);
        console.log(commentData)
        console.log("Fetching Completed");
    } catch (error) {
        console.error("Error fetching the Blog data");
    }
}

getBlogData()