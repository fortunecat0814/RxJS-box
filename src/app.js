import Rx from 'rxjs/Rx';
import $ from 'jquery';

const message = $('#message');

const btn = $('#btn');

const btnStream = Rx.Observable.fromEvent(btn, 'click');

btnStream.subscribe(function(e) {
    console.log(e);
}, function(err) {
    console.log(err);
}, function() {
    console.log('finish');
});

const input = $('#input');
const inputStream = Rx.Observable.fromEvent(input, 'keyup');
inputStream.subscribe(function(e) {
    console.log(e.currentTarget.value);
    message.append(e.target.value);
});

const mouseStream = Rx.Observable.fromEvent(document, 'mousemove');
mouseStream.subscribe(function(e) {
    message.html('<h3>x:' + e.clientX + '</h3>');
})


