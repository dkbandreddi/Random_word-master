const btn = document.getElementById("btn");

const hashCodes = [
	"a",
	"b",
	"c",
	"d",
	"e",
	"f",
	"g",
	"h",
	"i",
	"j",
	"k",
	"l",
	"m",
	"n",
	"o",
	"p",
	"q",
	"r",
	"s",
	"t",
	"u",
	"v",
	"w",
	"x",
	"y",
	"z",
];

let generator = function () {
	let total = Number(document.getElementById("value").value);
	if (total) {
		if (total < 250) {
			let str = "";
			for (let i = 0; i < total; i++) {
				let randomNumber = Math.floor(Math.random() * hashCodes.length);
				str = str + hashCodes[randomNumber];
			}
			document.querySelector(".display").innerHTML = str;
			if (str.length > 180) {
				document.querySelector(".display").style.overflowY = "scroll";
			} else {
				document.querySelector(".display").style.overflowY = "";
			}
		} else {
			document.querySelector(".display").innerHTML = "Enter Smaller Number";
			document.querySelector(".display").style.overflowY = "";
		}
	} else {
		document.querySelector(".display").innerHTML = "Enter Number";
		document.querySelector(".display").style.overflowY = "";
	}
};

btn.addEventListener("click", function (e) {
	e.preventDefault();
	generator();
});
