const url = 'https://api.github.com/users/emilyflo'


// fetch(url)
//     .then(res => res.json())
//     .then(data => {
//         document.querySelector('#root').innerHTML = `<h2>${data.name}</h2>`
//         console.log(data.repos_url)
//         // return data.repos_url
//     })
//     // .then((reposUrl) => fetch(reposUrl))
//     // .then((res) => res.json())
//     // .then((data) => {
//     //     console.log(data)
//     //     // for (let repo of data) {
//     //     //     document.querySelector(
//     //     //         '#org-data'
//     //     //     ).innerHTML += `<p><a href=${repo.url}>$repo.name}</a></p>`
//     //     }
//     // })

fetch(url)
    // method: 'GET',
    // ^^^ This is optional. API needs more information.
    .then((response) => response.json())
    .then((data) => {
        const root = document.getElementById('root');
        console.log(root);
        root.innerHTML = `
        <h1>${data.name}</h1>
        <img src=${data.avatar_url} width="300" />
        <h3><em>Location: </em>${data.location}</h3>
        <h3><em>GitHub URL: </em><a href=${data.url}>emilyflo</a></h3>
        <h3><em>GitHub username: </em>${data.login}</h3>
        <h2>GitHub Repos</h2>
        <h3><a href=${data.repos_url}>Check them out here!</a></h3>
        `
        // create a DOM element, append that element to root
        // let username = document.createElement('h3')
        // username.innerText = data.login
        // root.appendChild(username)
        // ^^This is the long form. 
    })
