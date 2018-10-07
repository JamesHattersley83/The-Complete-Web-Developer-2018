var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var lis = document.querySelectorAll("li");
var deleteBtn = document.getElementsByClassName("delete");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";

	var btn = document.createElement("button");
	btn.className = "delete";
	btn.appendChild(document.createTextNode("Delete"));
	li.appendChild(btn);
	btn.addEventListener("click", deleteItem);
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

for (var i = 0; i < lis.length; i++) {
	lis[i].addEventListener("click", function() {
		this.classList.toggle("done");
	});
}

for (var i = 0; i < deleteBtn.length; i++) {
	deleteBtn[i].addEventListener("click", deleteItem);
}

function deleteItem(event) {
	event.target.parentNode.remove();
}


button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);