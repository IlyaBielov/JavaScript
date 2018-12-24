
// function my_func() {
// 	let perent = document.querySelector("#footer");
// 	let child = perent.firstElementChild;

// 	let strong = document.createElement("strong");

// 	perent.replaceChild(strong, child);
// 	strong.appendChild(child);
// }	

// function my_func() {
// 	let li = document.querySelector('#menu').children;

// 	for (let i = 0; i < li.length; i++) {
// 		li[i].firstChild.textContent = (i+1) + "." + li[i].firstChild.textContent;
// 	}
// }

function my_func() {
	let body = document.getElementsByTagName("body")[0];
	let fragment = document.createDocumentFragment();

	while(body.lastChild) {
		fragment.appendChild(body.lastChild);
	}
	
	body.appendChild(fragment);
}


