const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

let under3 = users.filter((users) => (users.languages.length >= 3));
console.log(under3);

let emails = users.map((users) => (users.email));
console.log(emails);

let totalYears = users.reduce(function (accumulator, index) {
    return accumulator + index.yearsOfExperience;
},0)
console.log("Total years of experience: " + totalYears);

let averageYears = totalYears/users.length;
console.log("Average years of experience: " + averageYears);

//longhand
let longestEmail = users.reduce(function (accumulator, user, index, userArray) {
    if (index === userArray.length -1) {
        accumulator.push(user.email);
        accumulator.sort(function (email1,email2) {
            return email2.length - email1.length;
        });
        return accumulator[0];
    }else {
        accumulator.push(user.email);
        return accumulator;
    }

},[])

//shorthand with email array
// let longestEmail = users.reduce((a, b) => {
//     return a.length > b.email.length ? a : b.email;
// });

console.log(longestEmail);

let names = users.reduce(function (accumlulator, user) {
    accumlulator.push(user.name);
    return accumlulator;
},[])
console.log(names)

let usersNames = users.reduce((accumulator, user, index, arr) => {
    if (index === arr.length -1) {
        accumulator += `${user.name}.`;
    } else {
        accumulator += `${user.name}, `;
    }
    return accumulator;
},'Your instructors are: ');
console.log(usersNames);

//Bonus
let uniqueArray = users.reduce(function (nameArray, user, index, array) {
    nameArray.push(...user.languages); //Using the .push(...Array) separates the array when we push it rather than pushing it normally, and using .push(Array), where we would get an array inside of an array.
    // nameArray = nameArray.concat(user.languages); //Using the concat method we can combine arrays, back to back.
    // nameArray = [...nameArray,...user.languages];
    // console.log(nameArray);
    if (index === array.length - 1) {
        // return getUniqueValues(nameArray);
        return [... new Set(nameArray)].sort(); // Set creates a new array with the unique values
    } else {
        return nameArray;
        // return getUniqueValues(nameArray);
    }
}, []);
console.log(uniqueArray);