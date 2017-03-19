playerValues = function(){
	this.producten = 0;
	this.prijs = 9.99;
}

var Player = new playerValues();
var p = Player;

function save(){
    window.localStorage['Player'] = JSON.stringify(Player);
    window.s = JSON.parse(window.localStorage['Player']);
}

function load(){
    window.s = JSON.parse(window.localStorage['Player']);
    p.producten = s.producten;
		p.prijs = s.prijs;
		verversPagina();
}

window.onload = function(){
	load();
}

function deleteSave(){
    window.s = JSON.parse(window.localStorage['Player']);
    p.producten = 0;
		p.prijs = 9.99;
		s.prijs = p.prijs;
    s.producten = p.producten;
		verversPagina();
    save();
}

window.setInterval(function(){
  save();
	verversPagina();
}, 1000)

function meer(){
p.producten += 1;
verversPagina();
}

function minder(){
p.producten -= 1;
verversPagina();
}

function verversPagina(){
	$("#button").html(
		"<button class='btn' style='width:50px;' onclick='minder()'>" + "<<" + "</button>" +
		"<button class='btn' style='width:200px;'>" + "Koop " + p.producten + " PandaPrisma's" + "</button>" +
		"<button class='btn' style='width:50px;' onclick='meer()'>" + ">>" + "</button>"
	);
	$("#winkelwagen").html(
				"<b>" + "Aantal: " + "</b>" + p.producten + "<br>" +
				"<b>" + "Kosten incl. 21% btw: " + "</b>" + (p.producten * p.prijs) + "<br>" +
				"<button class='btn'>" + "Bestel" + "</button>"
	)


};

window.setInterval(function(){
	save();
}, 1000);
