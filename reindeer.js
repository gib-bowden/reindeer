var colors = ["Blue", "Red", "Orange", "Purple", "Hazel", "Aquamarine", "Periwinkle", "Azure", "Fuchsia", "Chocolate", "Amber", "Amaranth"];
var reindeer = ["Dasher", "Dancer", "Prancer", "Vixen", "Comet", "Cupid", "Donner", "Blitzen"];

var loopCount = reindeer.length; 

var hohohoElement = document.getElementById("reindeer");

for (i = 0; i < loopCount; i++) {

	var colorDeerDom = ("<h2>" + colors[i] + " " + reindeer[i] + "</h2>"); 

	hohohoElement.innerHTML += colorDeerDom;
}
