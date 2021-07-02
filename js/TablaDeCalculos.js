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
					n.innerHTML ="n: " + RPM +"min-1";
							
				}
				RPM123.innerHTML="n: " + RPM +"min-1";
				RPM1234.innerHTML="RPM: " + RPM +"min-1";
				DC123.innerHTML="Dc: " + valor + "mm";
				VC123.innerHTML="Vc: " + valor1 + "m/min";
				
						
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
					VC8.innerHTML ="VC: " + VC +"m/min";
				}
				VC1.innerHTML= "VC: " + VC +"m/min";
				VC123.innerHTML= "VC: " + VC +"m/min";
				DC123.innerHTML="Dc: " + valor + "mm";
				RPM1234.innerHTML="RPM: " + valor1 +"min-1";
						
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
				VF123.innerHTML = "VF: " + VF +"mm/min";
				vf1234.innerHTML = "VF: " + VF +"mm/min";
				RPM1234.innerHTML="RPM: " + document.getElementById("n123").value +"min-1";
				Z123.innerHTML= "Z: " + document.getElementById("z").value;
				fz123.innerHTML= "FZ: " + document.getElementById("fz").value + "mm";

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
					FZ1.innerHTML ="FZ: " + FZ +"mm";
				}
				FZ12.innerHTML = "FZ: " + FZ +"mm";
				fz123.innerHTML = "FZ: " + FZ +"mm";
				
				vf1234.innerHTML="VF: " + document.getElementById("txtN1").value +"mm/min";
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
					Q123.innerHTML ="Q: " + Q +"cm3/min";
				}
				Q12.innerHTML ="Q: " + Q +"cm3/min";
				Q1234.innerHTML ="Q: " + Q +"cm3/min";
				
				ae11.innerHTML="VF: " + document.getElementById("ae1").value +"mm/min";
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
					Vfe1.innerHTML ="Vfe: " + Vfe +"mm/min";
				}
				Vfe123.innerHTML = "Vfe: " + Vfe +"mm/min";
				vfe1234.innerHTML = "Vfe: " + Vfe +"mm/min";
				RPM1234.innerHTML="RPM: " + document.getElementById("n123").value +"min-1";
				Z123.innerHTML= "Z: " + document.getElementById("z").value;
				fz123.innerHTML= "FZ: " + document.getElementById("fz").value + "mm";

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
					Vf1.innerHTML ="vf: " + Vf +"mm/min";
				}
				Vf12.innerHTML = "vf: " + Vf +"mm/min";
				vf1234.innerHTML = "vf: " + Vf +"mm/min";
				vfe1234.innerHTML = "Vfe: " + Vfe +"mm/min";
				Dc123.innerHTML = "Dc: " + Dc +"mm";
				Dn123.innerHTML = "Dn: " + Dn +"mm";
	
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
					n.innerHTML ="n: " + RPM +"min-1";
							
				}
				RPM123.innerHTML="n: " + RPM +"min-1";
				RPM1234.innerHTML="RPM: " + RPM +"min-1";
				DN123.innerHTML="DN: " + document.getElementById("num").value + "mm";
				VC123.innerHTML="Vc: " + document.getElementById("num1").value + "m/min";
				
						
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
					VC8.innerHTML ="VC: " + VC +"m/min";
				}
				VC1.innerHTML= "VC: " + VC +"m/min";
				VC123.innerHTML= "VC: " + VC +"m/min";
				DN123.innerHTML="DN: " + document.getElementById("DN").value + "mm";
				RPM1234.innerHTML="RPM: " + document.getElementById("n1").value +"min-1";
						
}