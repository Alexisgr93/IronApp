// JavaScript Document
function CalcularRPM()
{
	
	valor = document.getElementById("Dc").value;
	valor1 = document.getElementById("Vc").value;
		if( valor == "" || valor1== "") {
  			alert('Completar todos los campos');
			}else
   				{
					var Dc = document.getElementById("Dc").value;
					var Vc = document.getElementById("Vc").value;
					var RPM= (1000 * Vc)/(3.14 * Dc);
							
					RPM = Number(RPM.toFixed(2));//muestra 2 decimales
					n.innerHTML ="n: " + RPM +" min<sup>-1</sup>";
					//<sup>2<sup> es para poner exponente
					//<sub>2</sub> es para sub indice
							
				}
				RPM123.innerHTML="n: " + RPM +" min<sup>-1</sup>";
				RPM1234.innerHTML="RPM: " + RPM +" min<sup>-1</sup>";
				DC123.innerHTML="D<sub>c</sub>: " + valor + " mm";
				VC123.innerHTML="V<sub>c</sub>: " + valor1 + " m/min";
				
						
}
				
				
function CalucularVC()
{
	valor = document.getElementById("Dc8").value;
	valor1 = document.getElementById("n1").value;
		if( valor == "" || valor1== "") {
  			alert('Completar todos los campos');
			}else
   				{
					var Dc = document.getElementById("Dc8").value;
					var n = document.getElementById("n1").value;
					var VC= (Dc * 3.14 * n)/1000;
						
					VC = Number(VC.toFixed(2));//muestra 2 decimales
					VC8.innerHTML ="V<sub>c</sub>: " + VC +" m/min";
				}
				VC1.innerHTML= "V<sub>c</sub>: " + VC +" m/min";
				VC123.innerHTML= "V<sub>c</sub>: " + VC +" m/min";
				DC123.innerHTML="D<sub>c</sub>: " + valor + " mm";
				RPM1234.innerHTML="RPM: " + valor1 + " min<sup>-1</sup>";
						
}

function CalcularVF(){
	
	valor = document.getElementById("fz").value;
	valor1 = document.getElementById("z").value;
	valor2 = document.getElementById("n123").value;
	
		if( valor == "" || valor1== "" || valor2== "") {
  			alert('Completar todos los campos');
			}else
   				{
					var fz =  document.getElementById("fz").value;
					var n = document.getElementById("z").value;
					var z = document.getElementById("n123").value;
					var VF= fz * n * z;
						
					VF = Number(VF.toFixed(2));//muestra 2 decimales
					VF1.innerHTML ="VF: " + VF +"mm/min";
				}
				VF123.innerHTML = "V<sub>f</sub>: " + VF +"mm/min";
				vf1234.innerHTML = "V<sub>f</sub>: " + VF +"mm/min";
				RPM1234.innerHTML="RPM: " + document.getElementById("n123").value +"min<sup>-1</sup>";
				Z123.innerHTML= "Z: " + document.getElementById("z").value;
				fz123.innerHTML= "f<sub>z</sub>: " + document.getElementById("fz").value + "mm";

}


function CalcularFZ(){
	
	valor = document.getElementById("txtN1").value;
	valor1 = document.getElementById("txtN2").value;
	valor2 = document.getElementById("txtN3").value;
	
		if( valor == "" || valor1== "" || valor2== "") {
  			alert('Completar todos los campos');
			}else
   				{
					var vf =  document.getElementById("txtN1").value;
					var z = document.getElementById("txtN2").value;
					var n = document.getElementById("txtN3").value;
					var FZ= vf/(n * z);
						
					FZ = Number(FZ.toFixed(2));//muestra 2 decimales
					FZ1.innerHTML ="f<sub>z</sub>: " + FZ +"mm";
				}
				FZ12.innerHTML = "f<sub>z</sub>: " + FZ +"mm";
				fz123.innerHTML = "f<sub>z</sub>: " + FZ +"mm";
				
				vf1234.innerHTML="V<sub>f</sub>: " + document.getElementById("txtN1").value +"mm/min";
				Z123.innerHTML= "Z: " + document.getElementById("txtN2").value;
				RPM1234.innerHTML= "RPM: " + document.getElementById("txtN3").value + "mm";
				
				
}

function CalcularQ(){
	
	valor = document.getElementById("ae1").value;
	valor1 = document.getElementById("ap2").value;
	valor2 = document.getElementById("vf3").value;
	
		if( valor == "" || valor1== "" || valor2== "") {
  			alert('Completar todos los campos');
			}else
   				{
					var ae =  document.getElementById("ae1").value;
					var ap = document.getElementById("ap2").value;
					var vf = document.getElementById("vf3").value;
					var Q = (ae * ap * vf)/1000;
						
					Q = Number(Q.toFixed(2));//muestra 2 decimales
					Q123.innerHTML ="Q: " + Q +"cm<sup>3</sup>/min";
				}
				Q12.innerHTML ="Q: " + Q +"cm3/min";
				Q1234.innerHTML ="Q: " + Q +"cm3/min";
				
				ae11.innerHTML="V<sub>f</sub>: " + document.getElementById("ae1").value +"mm/min";
				ap11.innerHTML= "Z: " + document.getElementById("ap2").value;
				vf1234.innerHTML= "RPM: " + document.getElementById("vf3").value + "mm";
				
				
}


function CalcularVfe(){
	
	valor = document.getElementById("fz").value;
	valor1 = document.getElementById("z").value;
	valor2 = document.getElementById("n123").value;
	
		if( valor == "" || valor1== "" || valor2== "") {
  			alert('Completar todos los campos');
			}else
   				{
					var fz =  document.getElementById("fz").value;
					var n = document.getElementById("z").value;
					var z = document.getElementById("n123").value;
					var Vfe= fz * n * z;
						
					Vfe = Number(Vfe.toFixed(2));//muestra 2 decimales
					Vfe1.innerHTML ="V<sub>fe</sub>: " + Vfe +"mm/min";
				}
				Vfe123.innerHTML = "V<sub>fe</sub>: " + Vfe +"mm/min";
				vfe1234.innerHTML = "V<sub>fe</sub>: " + Vfe +"mm/min";
				RPM1234.innerHTML="RPM: " + document.getElementById("n123").value +"min<sup>-1</sup>";
				Z123.innerHTML= "Z: " + document.getElementById("z").value;
				fz123.innerHTML= "f<sub>z</sub>: " + document.getElementById("fz").value + "mm";

}

function CalcularRoscadoVF(){
	
	valor = document.getElementById("num1").value;
	valor1 = document.getElementById("num2").value;
	valor2 = document.getElementById("num3").value;
	
		if( valor == "" || valor1== "" || valor2== "") {
  			alert('Completar todos los campos');
			}else
   				{
					var Vfe =  document.getElementById("num1").value;
					var Dn  = document.getElementById("num2").value;
					var Dc  = document.getElementById("num3").value;
					var Vf  = (Vfe *(Dn - Dc))/ Dn;
						
					Vf = Number(Vf.toFixed(2));//muestra 2 decimales
					Vf1.innerHTML ="v<sub>f</sub>: " + Vf +"mm/min";
				}
				Vf12.innerHTML = "v<sub>f</sub>: " + Vf +"mm/min";
				vf1234.innerHTML = "v<sub>f</sub>: " + Vf +"mm/min";
				vfe1234.innerHTML = "V<sub>fe</sub>: " + Vfe +"mm/min";
				Dc123.innerHTML = "D<sub>c</sub>: " + Dc +"mm";
				Dn123.innerHTML = "D<sub>n</sub>: " + Dn +"mm";
	
}

function CalcularRoscadoMachLamRPM()
{
	
	valor = document.getElementById("num").value;
	valor1 = document.getElementById("num1").value;
		if( valor == "" || valor1== "") {
  			alert('Completar todos los campos');
			}else
   				{
					var DN = document.getElementById("num").value;
					var Vc = document.getElementById("num1").value;
					var RPM= (1000 * Vc)/(3.14 * DN);
							
					RPM = Number(RPM.toFixed(2));//muestra 2 decimales
					n.innerHTML ="n: " + RPM +"min<sup>-1</sup>";
							
				}
				RPM123.innerHTML="n: " + RPM +"min<sup>-1</sup>";
				RPM1234.innerHTML="RPM: " + RPM +"min<sup>-1</sup>";
				DN123.innerHTML="D<sub>N</sub>: " + document.getElementById("num").value + "mm";
				VC123.innerHTML="V<sub>c</sub>: " + document.getElementById("num1").value + "m/min";
				
						
}

function CalucularRoscadoMachLamVC()
{
	valor = document.getElementById("DN").value;
	valor1 = document.getElementById("n1").value;
		if( valor == "" || valor1== "") {
  			alert('Completar todos los campos');
			}else
   				{
					var DN = document.getElementById("DN").value;
					var n = document.getElementById("n1").value;
					var VC= (DN * 3.14 * n)/1000;
						
					VC = Number(VC.toFixed(2));//muestra 2 decimales
					VC8.innerHTML ="V<sub>c</sub>: " + VC +"m/min";
				}
				VC1.innerHTML= "V<sub>c</sub>: " + VC +"m/min";
				VC123.innerHTML= "V<sub>c</sub>: " + VC +"m/min";
				DN123.innerHTML="D<sub>N</sub>: " + document.getElementById("DN").value + "mm";
				RPM1234.innerHTML="RPM: " + document.getElementById("n1").value +"min<sup>-1</sup>";
						
}


function CalucularRoscadoMachLamKC()
{
	valor = document.getElementById("kc1").value;
	valor1 = document.getElementById("p").value;
	valor2 = document.getElementById("z").value;
	valor3 = document.getElementById("lf").value;
	valor4 = document.getElementById("mc").value;
		if( valor == "" || valor1== "" || valor2== ""|| valor3== ""|| valor4== "") {
  			alert('Completar todos los campos');
			}else
   				{
					var kc1 = document.getElementById("kc1").value;
					var p = document.getElementById("p").value;
					var z = document.getElementById("z").value;
					var lf = document.getElementById("lf").value;
					var mc = document.getElementById("mc").value;
	
					var kc = kc1 * (((p*p)/(2*z*lf)) * mc);
					
						
					kc = Number(kc.toFixed(2));//muestra 2 decimales
					Kc11.innerHTML ="K<sub>c</sub>: " + kc +"m/min";
				}
				Kc12.innerHTML= "K<sub>c</sub>: " + kc +"m/min";
				
						
}

function CalucularRoscadoMachLamMd()
{
	valor = document.getElementById("kc9").value;
	valor1 = document.getElementById("Dn9").value;
	valor2 = document.getElementById("p9").value;
	valor3 = document.getElementById("lc9").value;
		if( valor == "" || valor1== "" || valor2== ""|| valor3== "") {
  			alert('Completar todos los campos');
			}else
   				{
					var kc = document.getElementById("kc9").value;
					var Dn = document.getElementById("Dn9").value;
					var p = document.getElementById("p9").value;
					var lc = document.getElementById("lc9").value;
					
	
					var Md = ((kc*Dn*(p*p))/4000);
					Md = Md * ((lc/Dn)*0.15)
						
					Md = Number(Md.toFixed(2));//muestra 2 decimales
					Md1.innerHTML ="M<sub>d</sub>: " + Md +"Nm";
				}
				Md12.innerHTML= "M<sub>d</sub>: " + Md +"Nm";
				
						
}

function CalucularRoscadoMachRosMd()
{
	valor = document.getElementById("kc9").value;
	valor1 = document.getElementById("Dn9").value;
	valor2 = document.getElementById("p9").value;
	valor3 = document.getElementById("lc9").value;
	valor4 = document.getElementById("g9").value;
	valor5 = document.getElementById("y9").value;
		if( valor == "" || valor1== "" || valor2== ""|| valor3== "" || valor4== ""|| valor5== "") {
  			alert('Completar todos los campos');
			}else
   				{
					var kc = document.getElementById("kc9").value;
					var Dn = document.getElementById("Dn9").value;
					var p = document.getElementById("p9").value;
					var lc = document.getElementById("lc9").value;
					var g9 = document.getElementById("g9").value;
					var y9 = document.getElementById("y9").value;
					
	
					var Md = ((kc*Dn*(p*p))/8000);
					Md = Md * ((lc/Dn)*g9);
					Md = Md	* (1.12-(y9/100))
						
					Md = Number(Md.toFixed(2));//muestra 2 decimales
					Md1.innerHTML ="M<sub>d</sub>: " + Md +"Nm";
				}
				Md12.innerHTML= "M<sub>d</sub>: " + Md +"Nm";
									
}


function CalcularTaladVF()
{
	valor = document.getElementById("nt").value;
	valor1 = document.getElementById("ft").value;
		if( valor == "" || valor1== "") {
  			alert('Completar todos los campos');
			}else
   				{
					var nt = document.getElementById("nt").value;
					var ft = document.getElementById("ft").value;
					
	
					var Vf = ft * nt;
					Vf = Number(Vf.toFixed(2));//muestra 2 decimales
					VF1.innerHTML = "V<sub>f</sub>: " + Vf +"mm/min";
				}
				VF123.innerHTML= "V<sub>f</sub>: " + Vf +"mm/min";
									
}

function CalcularTalQ()
{
	valor = document.getElementById("Vf1").value;
	valor1 = document.getElementById("Dc1").value;
		if( valor == "" || valor1== "") {
  			alert('Completar todos los campos');
			}else
   				{
					var vf = document.getElementById("Vf1").value;
					var Dc = document.getElementById("Dc1").value;
					
	
					var Q = (vf * 3.14 * (Dc*Dc))/4000;
					Q = Number(Q.toFixed(2));//muestra 2 decimales
					Q1.innerHTML = "Q: " + Q +"cm<sup>3</sup>/min";
				}
				Q123.innerHTML= "Q: " + Q +"cm<sup>3</sup>/min";
									
}

CalcularTalH()//revisar!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
{
	valor = document.getElementById("fzt").value;
	valor1 = document.getElementById("kt").value;
		if( valor == "" || valor1== "") {
  			alert('Completar todos los campos');
			}else
   				{
					var fzt = document.getElementById("fzt").value;
					var kt = document.getElementById("kt").value;
					
	
					var h = fzt * kt;
					h = Number(h.toFixed(3));//muestra 3 decimales
					h.innerHTML = "h: " + h +"cm<sup>3</sup>/min";
				}
				h123.innerHTML= "h: " + h +"cm<sup>3</sup>/min";
									
}


function CalcularTornoQ1()
{
	valor = document.getElementById("Vct1").value;
	valor1 = document.getElementById("Apt1").value;
	valor2 = document.getElementById("ft1").value;
	valor3 = document.getElementById("Dct1").value;
		if( valor == "" || valor1== "" || valor2== "" || valor3== "") {
  			alert('Completar todos los campos');
			}else
   				{
					var vc = document.getElementById("Vct1").value;
					var ap = document.getElementById("Apt1").value;
					var f  = document.getElementById("ft1").value;
					var Dc = document.getElementById("Dct1").value;
					
					var Q = vc * ap * f;
						Q = Q * (1-(ap/Dc));
					
					Q = Number(Q.toFixed(3));//muestra 3 decimales
					Qt1.innerHTML = "Q: " + Q +"cm<sup>3</sup>/min";
				}
				Qt123.innerHTML= "Q: " + Q +"cm<sup>3</sup>/min";
									
}


function CalcularTorA()
{
	valor = document.getElementById("ft9").value;
	valor1 = document.getElementById("apt9").value;
		if( valor == "" || valor1== "") {
  			alert('Completar todos los campos');
			}else
   				{
					var ft = document.getElementById("ft9").value;
					var apt = document.getElementById("apt9").value;
					
	
					var A = ft * apt;
					A = Number(A.toFixed(3));//muestra 3 decimales
					A1.innerHTML = "A: " + A +"mm<sup>2</sup>/min";
				}
				A12.innerHTML= "A: " + A +"mm<sup>2</sup>/min";
									
}
