const express = require('express');
const app = express();
const hbs = require('hbs');
const port = 1010;
app.set('view engine', 'hbs');

const path = require('path');

app.use(express.static('public'));

// app.set('views', path.join(__dirname, 'views'));


// Book Deatils
app.get('/', (req, res) => {
    const booksDetails = [
        {bookname: 'Milkman', author: 'Burns.A', year: '2018'},
        {bookname: 'NET Framework', author: 'Sharad Kumar', year: '2009'},
        {bookname: 'Publish News Letter', author: 'Amit Garg', year: '2011'},
    ];
    res.render('books', { booksDetails });
});


// Book Lists
app.get('/list', (req, res) => {
    const bookList = [
        {list: 'Milkman'},
        {list: 'NET Framework'},
        {list: 'Publish News Letter'},
    ];
    res.render('book list', {bookList});
})


//Book Cards
app.get('/cards', (req, res) => {
    const bookImg = [
        {name: "Milkman", price: '$34',image:'/images/milkman.jpeg'},
        {name: "NET Framework", price: '$83',image:'/images/NET Framework.jpeg'},
        {name: "Publish News Letter", price: '$69',image:'/images/Publish News Letter.jpeg'},
    ];
    res.render('book cards', {bookImg})
})


app.listen(port);