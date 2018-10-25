/**
 * @summary Implement the setup function that registers a click event handler 
 * and implements the following logic: When the button of class remove is clicked, 
 * its parent <div> element should be removed from the gallery.
 */

function setup() {
    var el = document.getElementsByClassName("remove");
    for (var i = 0; i < el.length; i++) {
        el[i].addEventListener('click', function () {
            this.parentNode.parentNode.removeChild(this.parentNode);
        });
    }
}

document.body.innerHTML = `<div class="image">
  <img src="https://goo.gl/kjzfbE" alt="First">
  <button class="remove">X</button>
</div>
<div class="image">
  <img src="https://goo.gl/d2JncW" alt="Second">
  <button class="remove">X</button>
</div>`;

setup();

document.getElementsByClassName("remove")[0].click();
console.log(document.body.innerHTML);

// this is used to capture the one that fired the event itself
// this.parentNode will return div.image
// this.parentNode.parentNode will return body
// body.removeChild(this.parentNode); // will remove the div part 

// document.addEventListener(event, function, useCapture);
// event param is required string that specifies the name of the event
// function param is required specifies what actions should be done when the event is fired
// useCapture is optional boolean, specifies if the event should be executed in capturing phase or bubbling phase  