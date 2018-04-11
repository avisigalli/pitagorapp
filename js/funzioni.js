/* funzioni per la app sul teorema di pitagora */
function calcolodiretta(){
	var c1 = document.forms.diretta.c1.valueAsNumber; // il primo cateto
	var c2 = document.forms.diretta.c2.valueAsNumber;// il secondo cateto
	var q1 = c1 * c1;// il primo cateto al quadrato
	var q2 = c2 * c2;// il secondo cateto al quadrato
	var i = Math.sqrt(q1+q2);// la radice quadrata della somma dei quadrati
	document.getElementById("ipotenusa").innerHTML="Ipotenusa= " + i ; // mostro il risultato
}

function calcoloinversa(){
	var i = document.forms.inversa.i.valueAsNumber; // l'ipotenusa
	var c2 = document.forms.inversa.c2.valueAsNumber;// il cateto noto
	var i2 = i*i;// l'ipotenusa al quadrato
	var q2 = c2*c2;// il cateto noto al quadrato
	var c1 = Math.sqrt(i2-q2);// la radice quadrata della differenza dei quadrati
	document.getElementById("cateto").innerHTML="Cateto= " + c1 ; // mostro il risultato
}

function annulladiretta(){
	document.getElementById("ipotenusa").innerHTML=" " ; // cancello il risultato formula diretta
	
}

function annullainversa(){
	document.getElementById("cateto").innerHTML=" " ; // cancello il risultato formula inversa
}

function esci(){
	navigator.app.exitApp();//chiude la app (solo su dispositivo mobile)
}
