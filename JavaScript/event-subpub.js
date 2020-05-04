//addEventListener
//removeEventListener
//dispatchEvent
const elem = document.querySelector('body');
const event = new CustomEvent('custom.event', {detail: elem.dataset.time});
console.log(event.type);

elem.addEventListener(event.type, function() {
    console.log(`${event.type} handled`);
}, false);

setTimeout(function () {
    elem.dispatchEvent(event);
}, 2000);
