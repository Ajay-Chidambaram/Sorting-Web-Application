var cont = document.getElementById("array-container")
cont.style = "flex-direction:row";

var div_sizes = [];
var divs = [];

var len = 20;

var time_delay = 0;

function generate() {

      time_delay = 0;
      cont.innerHTML = "";

      for (var i = 0; i < len; i++) {

            divs[i] = document.createElement("div");
            var h = (Math.ceil(Math.random() * 100)) % 100;
            div_sizes[i] = h === 0 ? 1 : h;

            cont.appendChild(divs[i]);
            divs[i].classList.add("ele");
            divs[i].style = "margin:0% 0.1%; background-color:rgb(243, 243, 63);width:25px;height:" + (div_sizes[i] + 25) + "px;";
            divs[i].innerHTML = div_sizes[i];

      }
}


function div_update(cont, ht, col, txt) {
      window.setTimeout(function () {
            cont.innerHTML = txt;
            cont.style = "margin:0% 0.1%; width:25px;background-color:" + col + ";height:" + (ht + 25) + "px;";
      }, time_delay += 10);
}
