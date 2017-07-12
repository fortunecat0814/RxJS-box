import Rx from 'rxjs/Rx';
import $ from 'jquery';

const numberArray = [1, 2, 3, 4, 5, 6];

const numberArray$ = Rx.Observable.from(numberArray);

numberArray$.subscribe((number) => {
    console.log(number);
}, err => {
    console.log(err);
}, () => {
    console.log('completed');
});

const json = [{
    title: 'Java', name: 'this is a book'
}, {
    title: 'Kotlin', name: 'this is a book'
}, {
    title:'Swfit', name: 'this is a book'
}];

const books = Rx.Observable.from(json);
books.subscribe(book => {
    $('#person').append('<li><h3>' + book.title + '</h3>' +
     '<p>' + book.name + '<p></li>');

});

/**
 * set
 */
const set = new Set(['hi', 30, {name: 'Mark'}]);
const set$ = Rx.Observable.from(set);
set$.subscribe((value) => {
    console.log(value);
}, err => {
    console.log(err);
}, () => {
    console.log('completed');
})