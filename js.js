var productInit = [
	new Product("PandaPrisma", 10, 2)
]

var klantInit = [
	new Klant(1, 0)
]

function Product(naam, prijs, aantal){
	this.naam = naam;
	this.prijs = prijs;
	this.aantal = aantal;
}

function Klant(id, producten){
	this.id = id;
	this.producten = producten;
}


productNaam = []; productPrijs = []; productAantal = [];
    for (var i = 0; i < productInit.length; i++) {
      var p = productInit[i];
      productNaam.push(p.naam);
      productPrijs.push(p.prijs);
			productAantal.push(p.aantal);
}

klantId = []; klantProducten = [];
	for (var i = 0; i < productInit.length; i++) {
		var k = klantInit[i];
		klantId.push(k.id);
		klantProducten.push(k.producten);
	}

function meer(){
		productAantal[0] += 1;
		verversPagina();
};

function minder(){
	if(productAantal > 0){
		productAantal[0] -= 1;
		verversPagina();
		}
	};

function koopPrisma(){
	if(productAantal[0] != 1){
	var k = confirm("Wil je " + productAantal[0] + " " + productNaam[0] + "'s kopen voor $" + (productPrijs[0] * productAantal[0]))
		if(k === true){
			window.location.href = 'file:///C:/Users/123568/Documents/emenoo/winkel.html';
			k.producten[0] = productAantal[0];
		}
		else{
			alert("niet afgeperst")
		}
	}
	else{
	var k =	confirm("Wil je " + productAantal[0] + " " + productNaam[0] + " kopen voor $" + (productPrijs[0] * productAantal[0]))
	if(k === true){
		window.location.href = 'file:///C:/Users/123568/Documents/emenoo/winkel.html';
		klantProducten[0] = productAantal[0];
	}
	else{
		alert("niet afgeperst")
	}
	}
}

function verversPagina(){
	$("#button").html(
		"<button class='btn' style='width:50px;' onclick='minder()'>" + "<<" + "</button>" +
		"<button class='btn' style='width:200px;' onclick='koopPrisma()'>" + productNaam[0] + " | " + productAantal[0] + " | $" + (productPrijs[0] * productAantal[0]) + "</button>" +
		"<button class='btn' style='width:50px;' onclick='meer()'>" + ">>" + "</button>");
		var prijsexclbtw = productAantal[0] * productPrijs[0];
	$("#winkelwagen").html("<span>" + "<b>Producten: </b>" + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + productAantal[0] + "</span>" + "<br>" +
												 "<span>" + "<b>Prijs: </b>" + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + productPrijs[0] + "</span>" + "<br>" +
												 "<span>" + "<b>Kosten artikelen: </b>" + "€" + (prijsexclbtw * 1.21).toFixed(2) + "</span>" + "<br>" +
												 "<span>" + "<b>Verzendkosten: </b>" + "&nbsp;&nbsp;&nbsp;€2,00" + "</span>" + "<br>" + "<hr>" +


 												 "<a class='btn' id='checkout'>Checkout</a>"
);
$("#test2").html(""

)
};


window.onload = function(){
	verversPagina();
};
