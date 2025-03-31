console.log("hello");

let loggedIn = true;
let hasMembership = true;

let user = loggedIn || hasMembership ? "Show Video" : "Don't show video";

console.log(user);

for (let i = 1; i <= 15; ++i) {
    
    if (i % 5 === 0) {
        console.log(`${i} - ASAP Frontend`);
    } else if (i % 2 ==! 0) {
        console.log(`${i} - ASAP`);
    } else {
        console.log(`${i} - Frontend`);
    }
}

let people = [18, 20, 16, 15, 21];

for (let i  = 0; i < people.length; i++) {
    if (people[i] < 18) {
        console.log("sorry "+ people[i] + " not allowed");
    } else {
        console.log("welcome "+ people[i]+ " come on in");
    }
}