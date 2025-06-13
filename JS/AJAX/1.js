console.log("Learning AJAX with JavaScript");

// let fetchData = document.getElementById("fetchData");
// fetchData.addEventListener("click", buttonClickHandler);
// function buttonClickHandler() {
//     console.log("You have clicked the button");

//     // Instantiate an XMLHttpRequest object
//     const xhr = new XMLHttpRequest();

//     // Open a connection
//     xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos/1', true);

//     // What to don on progress
//     xhr.onprogress = function() {
//         console.log("On progress");
//     };

//     // What to do on load
//     xhr.onload = function() {
//         if (xhr.status === 200) {
//             console.log("Response received");
//             console.log(this.responseText);
//         } else {
//             console.error("Error fetching data");
//         }
//     };

//     // Send the request
//     xhr.send();
//     console.log("Request sent");
// }


let populate = document.getElementById("populate");
populate.addEventListener("click", populateHandler);
function populateHandler() {

    console.log("Populating data");

    // Instantiate an XMLHttpRequest object
    const xhr = new XMLHttpRequest();

    // Open a connection
    xhr.open('GET', 'https://dummyjson.com/posts', true);

    // What to do on load
    xhr.onload = function() {
        if (xhr.status === 200) {
        console.log("Data populated successfully");
        let data = JSON.parse(this.responseText);
        let output = '';
        data.posts.forEach(function(post) {  // <-- fix here
            output += `<h3>${post.title}</h3><p>${post.body}</p>`;
        });
        document.getElementById("list").innerHTML = output;
    }else {
            console.error("Error fetching posts");
        }
    };

    // Send the request
    xhr.send();
}