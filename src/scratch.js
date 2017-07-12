import Rx from 'rxjs/Rx';
import $ from 'jquery';

import "babel-polyfill";

const source = new Rx.Observable(observer => {
    console.log('createing observable');
    observer.next(1);
});

source.subscribe(o => {
    console.log(o);
}, err => {
    console.log(err);
}, complete => {
    console.log('finished');
});

function* say(msg) {
  console.log(msg)
}
var gen = say('hello world111');
console.log(Object.prototype.toString.call(gen));
gen.next();