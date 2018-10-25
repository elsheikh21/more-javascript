function appendChildren(decorateDivFunction) {
    var allDivs = document.getElementsByTagName("div");
    var divLen = allDivs.length;
    for (var i = 0; i < divLen; i++) {
        var newDiv = document.createElement("div");
        decorateDivFunction(newDiv);
        allDivs[i].appendChild(newDiv);
    }
}

// Example case. 
document.body.innerHTML = `
<div id="a">
  <div id="b">
  </div>
</div>`;

//appendChildren(function(div) {});
console.log(document.body.innerHTML);