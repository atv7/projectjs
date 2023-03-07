"use strict"

/*
Перепишите один из примеров раздела Цепочка промисов, используя async/await вместо .then/catch:
*/

// function loadJson(url) {
//     return fetch(url)
//       .then(response => {
//         if (response.status == 200) {
//           return response.json();
//         } else {
//           throw new Error(response.status);
//         }
//       })
//   }

async function loadJson(url) {
    let responce = await fetch(url);
  
    if (responce.status == 200) {
        return await responce.json();
    }

    throw new Error(responce.status)
}

loadJson('no-such-user.json') // (3)
    .catch(alert); // Error: 404