
let getOptions = {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
    }
};

function getBooks() {
    fetch("https://alkaline-aluminum-bulb.glitch.me/books", getOptions)
        .then(resp => resp.json())
        .then(books => {
            let htmlStr = "";
            for (let book of books) {
                htmlStr = `${htmlStr}<h1>${book.title}</h1><p>by: ${book.author.firstName} ${book.author.lastName}</p>`;
            }
            $('#container').html(htmlStr);
        });
}



fetch("https://alkaline-aluminum-bulb.glitch.me/books/1", getOptions)
    .then(resp => resp.json())
    .then(book => console.log(book));



//post

let newBook = {
    "title": "Fight Club",
    "author": {
        "firstName": "Chuck",
        "lastName": "Paulanick"
    }
};

let postOptions = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(newBook)
};

let modification = {
    "title": "Fight Club",
    "author": {
        "firstName": "Chuck",
        "lastName": "Paulanick"
    }
}

let putOptions = {
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(modification)
};



$('#btn').click(() => {
    fetch("https://alkaline-aluminum-bulb.glitch.me/books", postOptions)
        // .then(resp => resp.json())
        .then(getBooks);
})

//PUT
fetch("https://alkaline-aluminum-bulb.glitch.me/books/6", putOptions).then(getBooks);

//PATCH
let patchThis = {
    "title": "Percy Jackson & the titan's curse"
}

let patchOptions = {
    method: 'PATCH',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(patchThis)
};

fetch("https://alkaline-aluminum-bulb.glitch.me/books/7", patchOptions).then(getBooks);

getBooks();