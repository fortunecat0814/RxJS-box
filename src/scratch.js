import Rx from 'rxjs/Rx';
import $ from 'jquery';

// import "babel-polyfill";

const source = new Rx.Observable(observer => {
    console.log('createing observable');
    observer.next('hello');
    observer.next('hello again');

    
    //
    setTimeout(() => {
        observer.next('timeout hello');
        //
        observer.complete();
    }, 3000);

    // 
    observer.error(new Error('this is a error'));
});

source
.catch(err => Rx.Observable.of(err))
.subscribe(o => {
    console.log("arrow function -> " + o);
}, err => {
    console.log('err arrow function -> ' + err);
}, complete => {
    console.log('finished');
});

// function* say(msg) {
//   console.log(msg)
// }
// var gen = say('hello world111');
// console.log(Object.prototype.toString.call(gen));
// gen.next();