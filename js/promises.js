

// function githubActivity(username) {
//     fetch('https://api.github.com/users', {headers: {'Authorization': GITHUB_TOKEN}})
//         .then(response => response.json())
//         .then(data => {
//             console.log(data)
//         })
//         .catch(error => console.log(error))
// }
// console.log(githubActivity('evan-williams'))

// var test = fetch("https://api.github.com/users/evan-williams/events", {
//     headers: {'Authorization': GITHUB_TOKEN}
//
// }).then(function(data){
//     console.log(data)
//     return data.json()
// }).then(function(data){
//     console.log(data)
// })
//


// function getGithubUsernames(userName) {
//     return fetch(`https://api.github.com/users/${userName}/events`, {headers: {'Authorization': GITHUB_TOKEN}})
// .then(response => response.json()).then(data => {
//         console.log(data);
//     })
// }
// getGithubUsernames();

function getGithubUsernames(userName) {
    return fetch(`https://api.github.com/users/${userName}/events`, {headers: {'Authorization': 'GITHUB_ACCESS_TOKEN'}})
.then(response => response.json().then(data => {
        console.log(data);
        var latestPush = data[0].created_at
        let date = new Date(latestPush);

        console.log(date.toString());
    }))
}
getGithubUsernames("evanwilliamsC137")

function wait(num) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.1) {
                resolve('Here is your data: ...');
            } else {
                reject('Network Connection Error!');
            }
        }, num);
    });
}

wait(1000).then(() => console.log('You\'ll see this after 1 second'));
wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));
