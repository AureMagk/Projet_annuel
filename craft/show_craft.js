


function showCraft(){
	var request = new XMLHttpRequest();
	request.onreadystatechange = function(){
		if (request.readyState ==4){
			var users = JSON.parse(request.responseText)
			users.forEach(insertUserHtml);
		}
	}

	request.open('GET', 'get_craft.php');
	request.send();

}

function insertCraft(u){

	var p = document.createElement('p');
	p.innerHTML = u.title + "<br>" + u.pic + u.description + u.price;
	var userContainer = document.getElementByTagName('craft_1');
	userContainer.appendChild(p);
}

