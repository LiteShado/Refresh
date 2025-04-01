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
let adults = [];

//filter method is mutating
/*
let search = people.filter(element => {
    console.log(element);
    if (element < 18) {
        console.log("sorry " + element);
    } else {

    adults.push(element);
    }
});
console.log(adults);



for (let i  = 0; i < people.length; i++) {
    if (people[i] < 18) {
        console.log("sorry "+ people[i] + " not allowed");
    } else {
        console.log("welcome "+ people[i]+ " come on in");
        adults.push(people[i]);
    }
    console.log(adults);
}

*/

//map method is non-mutating
let array = [1, 2, 3, 4, 5, 6];

//one line return and only one parameter in a callback function allows for no need to use curley braces or extra parenthesis

//converting us Dollars to aud dollars using 1.5 as conversion rate

/*
let newArray = array.map(element => null );

let usDollars = [10, 20, 30, 40];
let audDollars = [];

let auDollars = usDollars.map(element => element * 1.5);
console.log(auDollars);
*/

/*
for (let i = 0; i < usDollars.length; i++) {
    audDollars.push(usDollars[i] * 1.5);
}
console.log(audDollars);
*/
let users = [];

function test (userParam) {
    users.push(userParam);
    console.log(users);
}

test({email:"smith@gmail.com", password: "test123", name:"john smith", discord:"johnsmith", subscription: "VIP", lessonCompleted: [1, 2]});




