import Rx from 'rxjs/Rx';

Rx.Observable.from([1, 2, 3, 4]).map(item => {
  return item * 5;
}).subscribe(x => {
  console.log(x);
});