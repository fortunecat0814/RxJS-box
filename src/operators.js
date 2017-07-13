import Rx from 'rxjs/Rx';
import $ from 'jquery';

// interval
// Rx.Observable.interval(1000).subscribe(v => {
//     console.log(v);
// })

// Rx.Observable.interval(1000).take(5).subscribe(v => {
//     console.log(v);
// }, err => {
//     console.log(err);
// }, () => {
//     console.log('completed');
// });

// timer
// Rx.Observable.timer(5000, 1000).take(2).subscribe(v => {
//     console.log(v);
// });

// range
// Rx.Observable.range(5, 5).subscribe(v => {
//     console.log(v);
// });

// map
Rx.Observable.interval(1000).take(5).map(v => v * 2)
.subscribe(v => {
    console.log(v);
})

// pluck
