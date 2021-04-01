console.log("Sup objects");






(function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */

    var person = {
        firstName: "Evan",
        lastName: "Williams",
        sayHello: function () {
            console.log("Hello From " + this.firstName + " " + this.lastName + " Wubbalubbadubdub!");
        }
    }
    console.log(person.firstName);
    console.log(person.lastName);
    person.sayHello();



    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */




    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    var shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320},
    ];

    //with for-loop
    // function discount(x) {
    //     for(var i = 0; i < x.length; i++) {
    //         shoppers.forEach(function (name, amount) {
    //             if (x[i].amount > 200) {
    //                 console.log(x[i].name + " gets a discount of " + (x[i].amount / 12).toFixed(2));
    //             } else {
    //                 console.log(x[i].name + " gets no discount ");
    //             }
    //         })
    //     }
    // }
    // discount(shoppers);

    //creating local variables to compare to
    function discountApply(x) {
        var minSpend = 200;
        var discAmount = .12;
        shoppers.forEach(function (name, i) {

            if (x[i].amount > minSpend) {

                console.log(x[i].name + " spent $" + (x[i].amount).toFixed(2) + " and gets a discount of $" + (x[i].amount * discAmount).toFixed(2) + ". Bringing your total owed to $" + (x[i].amount - (x[i].amount * discAmount)).toFixed(2));

            } else {

                console.log(x[i].name + " spent $" + (x[i].amount).toFixed(2) + " Which brings him $" + ((x[i].amount - minSpend) * -1).toFixed(2) + " short of a discount. Your total you owe is $" + (x[i].amount).toFixed(2));

            }
        })
    }

    discountApply(shoppers);

    //first attempt incomplete

    // function discount(shoppers) {
    //     var shoppers = [
    //         {name: 'Cameron', amount: 180},
    //         {name: 'Ryan', amount: 250},
    //         {name: 'George', amount: 320}
    //     ];
    //
    //         if (shoppers[0].amount <= 200) {
    //             console.log(shoppers[0].name + " gets a discount of " + (shoppers[0].amount/12));
    //         }else {
    //             console.log(shopper[0].name + " gets no discount");
    //         }
    // }
    //
    // console.log(discount('Cameron'));
    // console.log(discount('Ryan'));
    // console.log(discount('George'));



    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */

    var books = [
        {title: 'Call of Cthulhu', author: {firsName: 'HP', lastName: 'Lovecraft'}},
        {title: 'Fight Club', author: {firsName: 'Chuck', lastName: 'Palahniuk'}},
        {title: 'Beyond Good and Evil', author: {firsName: 'Friedrich', lastName: 'Nietzsche'}},
        {title: 'The Prince', author: {firsName: 'Nicolo', lastName: 'Machiavelli'}},
        {title: 'Alices adventures in Wonderland', author: {firsName: 'Lewis', lastName: 'Carroll'}}
    ]

    // console.log(books[0].title);
    // console.log(books[0].author.firsName);
    // console.log(books[0].author.lastName);
    // console.log(books[1].title);
    // console.log(books[1].author.firsName);
    // console.log(books[1].author.lastName);
    // console.log(books[2].title);
    // console.log(books[2].author.firsName);
    // console.log(books[2].author.lastName);
    // console.log(books[3].title);
    // console.log(books[3].author.firsName);
    // console.log(books[3].author.lastName);
    // console.log(books[4].title);
    // console.log(books[4].author.firsName);
    // console.log(books[4].author.lastName);




    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */

    // books.forEach(function(book, index){
//     console.log("Book # "+ (index + 1));
//     console.log("Title: " + book.title);
//     console.log("Author: " + book.author.firstName + " " + book.author.lastName);
//     console.log("---")
// })
    books.forEach(function(book, index) {
        console.log("Book # " + (index + 1));
        showBookInfo(book);
        console.log("---")
    });
    function showBookInfo(book) {
        console.log("Title: " + book.title);
        console.log("Author: " + book.author.firsName + " " + book.author.lastName);
    }

    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */
    // function createBook(title, author) {
    //     var authorName = author.splice(" ")
    //     return {
    //         title: title,
    //         author: {
    //             firsName: authorName[0],
    //             lastName: authorName[authorName.length - 1]
    //         }
    //     }
    //     console.log("Title: " + this.title);
    //     console.log("Author: " + author.author);
    // }

    function createBook(title, authorFirstName, authorLastName) {
        return {
            title: title,
            author: {
                firstName: authorFirstName,
                lastName: authorLastName
            }
        };
    }
    console.log(createBook());


    books.push(createBook("cats", "meow", "meow"));
    console.log(books);


})();