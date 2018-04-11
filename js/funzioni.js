/* funzioni per la app sul teorema di pitagora */
function diretta(){
	var c1 = document.forms.diretta.c1.value; // il primo cateto
	var c2 = document.forms.diretta.c2.value;// il secondo cateto
	var q1 = Math.pow(c1,2);// il primo cateto al quadrato
	var q2 = Math.pow(c2,2);// il secondo cateto al quadrato
	var i = Math.sqrt(q1+q2);// la radice quadrata della somma dei quadrati
	document.getElementById("risultato").innerHTML="Ipotenusa= " + i ; // mostro il risultato
}

function inversa(){
	var i = document.forms.inversa.i.value; // l'ipotenusa
	var c2 = document.forms.inversa.c2.value;// il cateto noto
	var i2 = Math.pow(i,2);// l'ipotenusa al quadrato
	var q2 = Math.pow(c2,2);// il cateto noto al quadrato
	var c1 = Math.sqrt(i2+q2);// la radice quadrata della differenza dei quadrati
	document.getElementById("risultato").innerHTML="Cateto= " + c1 ; // mostro il risultato
}

function annulla(){
	document.getElementById("risultato").innerHTML=" " ; // cancello il risultato
}

function esci(){
	navigator.app.exitApp();//chiude la app (solo su dispositivo mobile)
}
