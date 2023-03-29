cad=document.f_encripta.cad.value;
	op=document.f_encripta.op.value;
	if (cad.length<5){
		alert("Error minico de cadena 5 caracteres");
		document.f_encripta.cad.style.background="red";
	}
	else{ //1
		abc="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
		llave="cdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789ab"
		{
		if (op=="Encriptar"){ //2
			salida="";
			cont=0;
			while (cont<cad.length){ //3
				letra=cad.charAt(cont);
				pos=abc.indexOf(letra);
				salida=salida+llave.charAt(pos);
				cont++;
			} //3
			document.f_encripta.salida.value=salida;
		}//2

	} //1
}