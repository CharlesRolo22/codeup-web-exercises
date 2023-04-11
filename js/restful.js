"use strict";

fetch("http://localhost:3000/posts")
    .then(response => response.json())
    .then(data => console.log(data))
    .catch (error => console.error(error));


function createPost(title, author){
    title = prompt("What is your favorite title?")
    author = prompt("Who is the author?")
    return {title, author};
}

console.log(createPost())

fetch("http://localhost:3000/posts", {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(createPost())

}).then(resp => resp.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));

// Delete
function deletePost(id) {
    fetch("http://localhost:3000/posts/2", {
        method: 'DELETE',

    }).then(resp => resp.json())
        .then(data => console.log(data))
        .catch(error => console.error(error));

}

deletePost(4)