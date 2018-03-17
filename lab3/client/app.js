
// PubSub is single object for publish data to multiple subscribers
class PubSub {
    constructor () {
        this.subscribers = [];

    }

    // subscribe allows a new subscriber to listen for changes by providing
    // callback function in the parameter
    subscribe (fn) {

        this.subscribers.push(fn);

    }

    // one can publish any data to subscribers
    publish (data) {

        this.subscribers.forEach(subscriber => {

            subscriber(data);

        });

      }

     }

const pubSub = new PubSub();


let ai_count = document.getElementById("ai_count");

function SUBS () {

    incrementalGame.state.counter++;

    ai_count.innerHTML = "AI " + incrementalGame.state.counter;
}

//unable to get element by classname ,
//my button would disappear when i made it to a class instead id
// i used get elementbyid instead of queryselectorall()


var subsAI = document.getElementById("aI_button");

subsAI.addEventListener('click', () => {

    pubSub.publish(window.incrementalGame.state.counter);

}) ;
pubSub.subscribe(SUBS);
