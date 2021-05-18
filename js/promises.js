
function getGithubUsernames(userName) {
    return fetch(`https://api.github.com/users/${userName}/events`, {headers: {'Authorization': 'GITHUB_TOKEN'}})
.then(response => response.json().then(data => {
        console.log(data);
        let lastPush;
        for (let event of data) {
            if (event.type === "PushEvent") {
                lastPush = new Date(event.created_at);
                break;
            }
        }
        console.log(lastPush.toDateString());
    }))
}
getGithubUsernames("evanwilliamsC137")

//long hand
function wait(num) {
    return new Promise((resolve) => {
        setTimeout(() => {
                resolve(`You'll see this after ${num/1000} seconds`);
        }, num);
    });
}

//short hand
// function wait(num) {
//     return new Promise(resolve => setTimeout(resolve, num));
// }

wait(1000).then((message) => console.log(message));
wait(3000).then((message) => console.log(message));


