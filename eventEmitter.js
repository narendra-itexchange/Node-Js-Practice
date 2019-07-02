// const EventEmitter = require('events');
// class MyEmitter extends EventEmitter {}
// const myEmitter = new MyEmitter();
// myEmitter.on('event', function(a, b) {
//   console.log(a, b, this);
//   // Prints:
//   //   Technoetics Club MyEmitter {
//   //     domain: null,
//   //     _events: { event: [Function] },
//   //     _eventsCount: 1,
//   //     _maxListeners: undefined }
// });
// myEmitter.emit('event','Technoetics', 'Club');

// Event Emitter run synchronously

// lets make it Asynchronous
const EventEmitter = require('events');
class MyEmitter extends EventEmitter {}
const myEmitter = new MyEmitter();
myEmitter.on('event', function(a, b) {
  setImmediate(() => {
    console.log('this happens asynchronously');
  });
  function cb(){
    console.log('processed in next iteration',a,b);
  }
  process.nextTick(cb)
  console.log('processed in first iteration',a,b);
});
myEmitter.emit('event', 'Technoetics', 'Club');
/**
 * Output of the above Program:
 * processed in first iteration Technoetics Club
 * processed in next iteration Technoetics Club
 * this happens asynchronously
 */