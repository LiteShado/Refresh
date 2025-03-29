console.log("hello");

let loggedIn = true;
let hasMembership = true;

let user = loggedIn || hasMembership ? "Show Video" : "Don't show video";

console.log(user);