function mostrar(){ //SIETE
	document.f_contra.c_pass.type="text"; //aquí pongo que el campo c_contra es text
}

function ocultar(){ //SIETE
	document.f_contra.c_pass.type="password"; //aquí pongo que el campo c_contra es password
}

function campos_azules()	{ //SIETE
	document.f_contra.c_cta.style.background="blue";
	document.f_contra.c_pass.style.background="blue";
}

function enviar(){ //SIETE //yay
	intentos=document.f_contra.intentos.value;
	intentos=parseInt(intentos);
	c_cta=document.f_contra.c_cta.value;  //AQUÍ ESTOY TOMANDO LOS VALORES DE CUENTA Y PASSWORD
	c_pass=document.f_contra.c_pass.value;
	if (c_cta.length==0){//dos
		alert("Error, debe enviar la cuenta"); 
		document.f_contra.c_cta.style.background="red";
	}//dos
	else{//uno
		if (c_pass.length==0){//eee
			alert("Error, debe enviar la contraseña"); 
			document.f_contra.c_pass.style.background="red";
		}//eee
		
		else{//holis
			intentos++; //esto sería igual a intentos=intentos+1;
			document.f_contra.intentos.value=intentos;
			if(intentos==3){ //hola
				alert("Se han agotado los intentos");
				document.f_contra.c_cta.disabled="true";
				document.f_contra.c_cta.style.background="gray";
				document.f_contra.c_pass.disabled="true";
				document.f_contra.c_pass.style.background="gray";
			}//hola
		}//holis
	}//uno
}//Yay

/*function certificado(){//5
	c_cta=document.f_contra.c_cta.value;
	c_pass=document.f_contra.c_pass.value;
	if (c_cta.length<5){//4
		alert("ERROR, EL USUARIO DEBE TENER AL MENOS 5 CARACTERES");
		document.f_contra.c_cta.style.background="red";
	}//4	
	else{//3
		abc="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
		llave="defghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789abc"
			cta_encrip="";
			cont=0;
			while(cont<c_cta.length){//1
				letra=c_cta.charAt(cont);
				pos=abc.indexOf(letra); //pos de posición
				cta_encrip=cta_encrip+llave.charAt(pos);
				cont++;
			} //1
}
			pass_encrip="";
			cont2=0;
			while(cont2<c_pass.length){//1
				letra2=c_pass.charAt(cont2);
				pos2=abc.indexOf(letra2); //pos de posición
				pass_encrip=pass_encrip+llave.charAt(pos2);
				cont2++;
			} //1

		if (cta_encrip==="pdBulv" && pass_encrip==="krod"){
			location.href="encripta.html";
	}	
*/

function certificado(){
c_cta=document.f_contra.c_cta.value;
c_pass=document.f_contra.c_pass.value;
if(c_cta.length<5){
		alert("Error, la palabra debe de ser de más de 5 caracteres");
		document.f_contra.c_cta.style.background="red";
	}
	else{ 
			abc="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWYXZ0123456789"
			llave="defghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWYXZ0123456789abc"
			salida="";
				cont=0;
				while(cont<c_cta.length){
					letra=c_cta.charAt(cont);
					pos=abc.indexOf(letra);
					salida=salida+llave.charAt(pos);
					cont++;
		}
		salida1="";
				cont1=0;
				while(cont1<c_pass.length){
					letra1=c_pass.charAt(cont1);
					pos1=abc.indexOf(letra1);
					salida1=salida1+llave.charAt(pos1);
					cont1++;
		}
		if ((salida=="pdBulv") && (salida1="krod")){
	alert("HOLA ACCESO PERMITIDO");
}
}
}