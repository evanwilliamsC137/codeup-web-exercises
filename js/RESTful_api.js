
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



// post

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

$('#btn').click(() => {
    fetch("https://alkaline-aluminum-bulb.glitch.me/books")
        .then(resp => resp.json())
        .then(books => {
            for (let book of books) {
                if (book.title !== newBook.title || book.author.firstName !== newBook.author.firstName || book.author.lastName !== newBook.author.lastName) {
                    fetch("https://alkaline-aluminum-bulb.glitch.me/books", postOptions)
                        // .then(resp => resp.json())
                        .then(getBooks)
                        .then(console.log(books))
                }else {
                    alert("hey, that book already exists!");
                    break;
                }
            }
        })

})

// PUT
// let putThis = {
//     "title": "Fight Club",
//     "author": {
//         "firstName": "Chuck",
//         "lastName": "Paulanick"
//     }
// }
//
// let putOptions = {
//     method: 'PUT',
//     headers: {
//         'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(putThis)
// };
//
//
// fetch("https://alkaline-aluminum-bulb.glitch.me/books/6", putOptions).then(getBooks);


// PATCH
// let patchThis = {
//     "title": "Percy Jackson & the titan's curse"
// }
//
// let patchOptions = {
//     method: 'PATCH',
//     headers: {
//         'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(patchThis)
// };
//
// fetch("https://alkaline-aluminum-bulb.glitch.me/books/7", patchOptions).then(getBooks);



// DELETE

let deleteOptions = {
    method: 'DELETE',
    headers: {
        'Content-Type': 'application/json',
    }
};



// $('#removeBtn').click(() => {
//     fetch("https://alkaline-aluminum-bulb.glitch.me/books")
//         .then(resp => resp.json())
//         .then(books => {
//             let removeBooks = [];
//             for (let book of books) {
//                 if (removeBooks.length === 0){
//                     removeBooks.push(book);
//                     continue;
//                 }
//                 for (let existingBook of removeBooks) {
//                     if (book.title !== existingBook.title || book.author.firstName !== existingBook.author.firstName || book.author.lastName !== existingBook.author.lastName) {
//                         removeBooks.push(book);
//                     }else {
//                         fetch(`https://alkaline-aluminum-bulb.glitch.me/books/${book.id}`, deleteOptions).then(getBooks);
//                     }
//                 }
//             }
//         })
//
//
// })

$("#removeBtn").click(() => {
    let inputVal = $('#id-to-delete').val();
    fetch(`https://alkaline-aluminum-bulb.glitch.me/books/${inputVal}`, deleteOptions)
        .then(getBooks)
})

getBooks();