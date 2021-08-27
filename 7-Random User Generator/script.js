const URL = 'https://randomuser.me/api/?results=20';

fetch(URL).then( resp => resp.json()).then(data => {
    let authors = data.results;
    console.log(authors);

    for (let i = 0; i < authors.length; i++) {
        let div = document.createElement('div');
        let image = document.createElement('img');
        let p = document.createElement('p');
        p.appendChild(document.createTextNode(`${authors[i].name.first} ${authors[i].name.last}`));

        image.src = authors[i].picture.large;

        div.appendChild(image);
        div.appendChild(p);
        document.querySelector('.container').appendChild(div);
    }
})