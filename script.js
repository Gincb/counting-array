"use strict";

window.addEventListener("load", startCounter); //Start counter on load

let number = 0;
const array = [];

function startCounter() {
  //Set interval to repeat +1 to the conter every second
  setInterval(function () {
    array.unshift(number); //Push to beginning of array
    number += 1;
    console.log(array);

    //Check lenght and remove last item
    if (array.length >= 9) {
      array.pop(); //Remove from end of array
    }
  }, 1000);
}
