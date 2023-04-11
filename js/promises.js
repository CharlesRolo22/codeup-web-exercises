"use strict";

function lastCommit(username){
    let result = fetch(`https://api.github.com/users/${charlesrolo22}/events/public`,
        { headers: {
        'Authorization' :

        `token ${API_TOKEN}`
        }
    })
    .then(response => response.json())
    .then(events => {
       let pushEvents = events.filter(event => event.type === 'PushEvent')
        return pushEvents[0].created_at;
});
    return result;
}
lastCommit().then(data => console.log(new Date(data).toDateString()));

