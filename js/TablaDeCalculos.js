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
				//tabla
				RPMTabla.innerHTML= RPM +" min<sup>-1</sup>";
				DCTabla.innerHTML= valor + " mm";
				VCTabla.innerHTML= valor1 + " m/min";
						
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
				//tabla
				RPMTabla.innerHTML = valor1 + " min<sup>-1</sup>";
				DCTabla.innerHTML = valor + " mm";
				VCTabla.innerHTML= VC +" m/min";
				
				
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
					Vfe1.innerHTML ="V<sub>fe</sub>: " + Vfe +" mm/min";
				}
				//tabla
				VFETabla.innerHTML = Vfe +" mm/min";
				FZTabla.innerHTML = valor +" mm";
				ZTabla.innerHTML = valor1 +" diente";
				RPMTabla.innerHTML = valor2 +" min<sup>-1</sup>";
				
				
				Vfe123.innerHTML = "V<sub>fe</sub>: " + Vfe +" mm/min";
				vfe1234.innerHTML = "V<sub>fe</sub>: " + Vfe +" mm/min";
				RPM1234.innerHTML="RPM: " + document.getElementById("n123").value +" min<sup>-1</sup>";
				Z123.innerHTML= "Z: " + document.getElementById("z").value;
				fz123.innerHTML= "f<sub>z</sub>: " + document.getElementById("fz").value + " mm";
				VFETabla.innerHTML = Vfe +" mm/min";
				FZTabla.innerHTML = valor +" mm";
				ZTabla.innerHTML = valor1 +" diente";
				RPMTabla.innerHTML = valor2 +" min<sup>-1</sup>";

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
					Vf1.innerHTML ="v<sub>f</sub>: " + Vf +" mm/min";
				}
				//tabla
				VFTabla.innerHTML = Vf +" mm/min";
				VFETabla.innerHTML = Vfe +" mm/min";
				DNTabla.innerHTML = Dn + " mm";
				DCTabla.innerHTML = Dc + "mm";
				
				
				
				Vf12.innerHTML = "v<sub>f</sub>: " + Vf +" mm/min";
				vf1234.innerHTML = "v<sub>f</sub>: " + Vf +" mm/min";
				vfe1234.innerHTML = "V<sub>fe</sub>: " + Vfe +" mm/min";
				Dc123.innerHTML = "D<sub>c</sub>: " + Dc +" mm";
				Dn123.innerHTML = "D<sub>n</sub>: " + Dn +" mm";
	
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
	
					var kc = (2*z*lf);  //Math.pow(base, exponente)
						kc =  Math.pow(kc, mc);
						kc = (kc1 * (p*p)) / kc;
						
						
					kc = Number(kc.toFixed(2));//muestra 2 decimales
					Kc11.innerHTML ="K<sub>c</sub>: " + kc +"N/mm<sup>2</sup>";
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

CalcularTalH()
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
					A1.innerHTML = "A: " + A +"mm<sup>2</sup>";
				}
				A12.innerHTML= "A: " + A +"mm<sup>2</sup>";
									
}



function CalcularTorB()
{
	valor = document.getElementById("ktb").value;
	valor1 = document.getElementById("aptb").value;
		if( valor == "" || valor1== "") {
  			alert('Completar todos los campos');
			}else
   				{
					var ap = document.getElementById("aptb").value;
					var k = document.getElementById("ktb").value;
					
	
					var b = ap/(Math.sin(k));
					b = Number(b.toFixed(3));//muestra 3 decimales
					B1.innerHTML = "b: " + b +"mm";
				}
				B12.innerHTML= "b: " + b +"mm";
}
	
function CalcularTorH()
{
	valor = document.getElementById("kth").value;
	valor1 = document.getElementById("fth").value;
		if( valor == "" || valor1== "") {
  			alert('Completar todos los campos');
			}else
   				{
					var f = document.getElementById("fth").value;
					var k = document.getElementById("kth").value;
					
	
					var h = f/(Math.sin(k));
					h = Number(h.toFixed(3));//muestra 3 decimales
					H1.innerHTML = "h: " + h +"mm";
				}
				H12.innerHTML= "h: " + h +"mm";
}


function CalcularTorFc()
{
	valor = document.getElementById("AFc").value;
	valor1 = document.getElementById("KcFc").value;
	valor2 = document.getElementById("HFc").value;
	valor3 = document.getElementById("MCFc").value;
		if( valor == "" || valor1== "" || valor2 == "" || valor3== "") {
  			alert('Completar todos los campos');
			}else
   				{
					var A = document.getElementById("AFc").value;
					var Kc = document.getElementById("KcFc").value;
					var h = document.getElementById("HFc").value;
					var mc = document.getElementById("MCFc").value;
					
	
					var Fc = A*Kc*(Math.pow(h, mc));//Math.pow(base, exponente)
					Fc = Number(Fc.toFixed(3));//muestra 3 decimales
					FC1.innerHTML = "Fc: " + Fc +"N";
				}
				FC12.innerHTML= "Fc: " + Fc +"N";
}

function CalcularTorPmot()
{
	valor = document.getElementById("QPmot").value;
	valor1 = document.getElementById("KcPmot").value;
	valor2 = document.getElementById("nPmot").value;

		if( valor == "" || valor1== "" || valor2 == "") {
  			alert('Completar todos los campos');
			}else
   				{
					var Q  = document.getElementById("QPmot").value;
					var Kc = document.getElementById("KcPmot").value;
					var n  = document.getElementById("nPmot").value;
					
	
					var Pmot = (Q*Kc)/(6000*n)
					Pmot = Number(Pmot.toFixed(3));//muestra 3 decimales
					Pmot1.innerHTML = "P<sub>mot</sub>: " + Pmot +" KW";
				}
				Pmot12.innerHTML= "P<sub>mot</sub>: " + Pmot +" KW";
				PmotTabla.innerHTML= Pmot +" KW";
				QTabla.innerHTML= valor + " cm<sup>3</sup>/min";
				KC11Tabla.innerHTML= valor1 + " N/mm<sup>2</sup>";
				ETATabla.innerHTML= valor2;
}

function CalcularTorTH()
{
	valor = document.getElementById("LMTH").value;
	valor1 = document.getElementById("FTH").value;
	valor2 = document.getElementById("NTH").value;

		if( valor == "" || valor1== "" || valor2 == "") {
  			alert('Completar todos los campos');
			}else
   				{
					var lm  = document.getElementById("LMTH").value;
					var f = document.getElementById("FTH").value;
					var n  = document.getElementById("NTH").value;
					
	
					var th = (lm)/(f*n)
					th = Number(th.toFixed(3));//muestra 3 decimales
					TH1.innerHTML = "t<sub>h</sub>: " + th +"min";
				}
				TH12.innerHTML= "t<sub>h</sub>: " + th +"min";
}

function CalcularTorRMAX()
{
	valor = document.getElementById("FRMAX").value;
	valor1 = document.getElementById("RRMAX").value;


		if( valor == "" || valor1== "") {
  			alert('Completar todos los campos');
			}else
   				{
					var f  = document.getElementById("FRMAX").value;
					var r = document.getElementById("RRMAX").value;					
	
					var Rmax = ((f*f)/(8*r))*1000
					Rmax = Number(Rmax.toFixed(3));//muestra 3 decimales
					RMAX1.innerHTML = "R<sub>max</sub>: " + Rmax +"&mu;m";
				}
				RMAX12.innerHTML= "R<sub>max</sub>: " + Rmax +"&mu;m";
}

function CalcularTorLC()
{
	valor = document.getElementById("DCLC").value;
	valor1 = document.getElementById("LMLC").value;
	valor2 = document.getElementById("FLC").value;


		if( valor == "" || valor1== "" || valor2== "") {
  			alert('Completar todos los campos');
			}else
   				{
					var Dc  = document.getElementById("DCLC").value;
					var lm = document.getElementById("LMLC").value;	
					var f = document.getElementById("FLC").value;				
	
					var lc = ((Dc*3.14))/1000
						lc = lc *(lm/f)
					lc = Number(lc.toFixed(3));//muestra 3 decimales
					LC1.innerHTML = "l<sub>c</sub>: " + lc +"m";
				}
				LC12.innerHTML= "l<sub>c</sub>: " + lc +"m";
}

function CalcularTalMC()
{
	valor = document.getElementById("DCMC").value;
	valor1 = document.getElementById("KCMC").value;
	valor2 = document.getElementById("FMC").value;


		if( valor == "" || valor1== "" || valor2== "") {
  			alert('Completar todos los campos');
			}else
   				{
					var Dc  = document.getElementById("DCMC").value;
					var kc = document.getElementById("KCMC").value;	
					var f = document.getElementById("FMC").value;				
	
					var Mc = ((Dc*Dc))* kc * f;
						Mc = Mc / 8000;
					Mc = Number(Mc.toFixed(3));//muestra 3 decimales
					MC1.innerHTML = "M<sub>c</sub>: " + Mc +"Nm";
				}
				MC12.innerHTML= "M<sub>c</sub>: " + Mc +"Nm";
}

function CalcularTalFF()
{
	valor = document.getElementById("DCFF").value;
	valor1 = document.getElementById("KCFF").value;
	valor2 = document.getElementById("FFF").value;


		if( valor == "" || valor1== "" || valor2== "") {
  			alert('Completar todos los campos');
			}else
   				{
					var Dc  = document.getElementById("DCFF").value;
					var kc = document.getElementById("KCFF").value;	
					var f = document.getElementById("FFF").value;				
	
					var Ff = (Dc* kc * f)/2;
						Ff = Ff * 0.63;
					Ff = Number(Ff.toFixed(3));//muestra 3 decimales
					FF1.innerHTML = "F<sub>f</sub>: " + Ff +"N";
				}
				FF12.innerHTML= "F<sub>f</sub>: " + Ff +"N";
}

function CalcularTalKC()
{
	valor = document.getElementById("KCKC").value;
	valor1 = document.getElementById("HKC").value;
	valor2 = document.getElementById("MCKC").value;


		if( valor == "" || valor1== "" || valor2== "") {
  			alert('Completar todos los campos');
			}else
   				{
					var Kc1  = document.getElementById("KCKC").value;
					var h = document.getElementById("HKC").value;	
					var mc = document.getElementById("MCKC").value;				
	
					var Kc = Kc1 / (Math.pow(h, mc));
						
					Kc = Number(Kc.toFixed(3));//muestra 3 decimales (Math.pow(h, mc))
					KC1.innerHTML = "K<sub>c</sub>: " + Kc +"N/mm";
				}
				KC12.innerHTML= "K<sub>c</sub>: " + Kc +"N/mm<sup>2<sup>";
}

function CalcularTalH()
{
	valor = document.getElementById("FZH").value;
	valor1 = document.getElementById("KH").value;
		if( valor == "" || valor1== "") {
  			alert('Completar todos los campos');
			}else
   				{
					var fz = document.getElementById("FZH").value;
					var k = document.getElementById("KH").value;
					
	
					var h = fz/(Math.sin(k));
					h = Number(h.toFixed(3));//muestra 3 decimales
					H1.innerHTML = "h: " + h +"mm";
				}
				H12.innerHTML= "h: " + h +"mm";
}

function CalucularRoscadoMachRosP()
{
	valor = document.getElementById("MDP").value;
	valor1 = document.getElementById("RPMP").value;
	valor2 = document.getElementById("ETAP").value;


		if( valor == "" || valor1== "" || valor2== "") {
  			alert('Completar todos los campos');
			}else
   				{
					var Md  = document.getElementById("MDP").value;
					var RPM = document.getElementById("RPMP").value;	
					var eta = document.getElementById("ETAP").value;				
	
					var P = (Md * RPM)/(9500 * eta);
						
					P = Number(P.toFixed(3));//muestra 3 decimales (Math.pow(h, mc))
					P1.innerHTML = "P: " + P +"KW";
				}
				P12.innerHTML= "P: " + P +"KW";
}


function CalcularFresVF()
{
	valor = document.getElementById("FZVF").value;
	valor1 = document.getElementById("ZVF").value;
	valor2 = document.getElementById("NVF").value;


		if( valor == "" || valor1== "" || valor2== "") {
  			alert('Completar todos los campos');
			}else
   				{
					var fz  = document.getElementById("FZVF").value;
					var z = document.getElementById("ZVF").value;	
					var n = document.getElementById("NVF").value;				
	
					var vf = fz * z * n;
						
					vf = Number(vf.toFixed(3));//muestra 3 decimales (Math.pow(h, mc))
					VF1.innerHTML = "v<sub>f</sub>: " + vf +" mm/min";
				}
				VF12.innerHTML= "v<sub>f</sub>: " + vf +" mm/min";
				VFTabla.innerHTML = vf +" mm/min";
				FZTabla.innerHTML= valor +" mm";
				ZTabla.innerHTML= valor1 +" dientes";
				RPMTabla.innerHTML = valor2 +" min<sup>-1</sup>";
				
}

function CalcularFresFZ()
{
	valor = document.getElementById("VFFZ").value;
	valor1 = document.getElementById("ZFZ").value;
	valor2 = document.getElementById("NFZ").value;


		if( valor == "" || valor1== "" || valor2== "") {
  			alert('Completar todos los campos');
			}else
   				{
					var vf  = document.getElementById("VFFZ").value;
					var z = document.getElementById("ZFZ").value;	
					var n = document.getElementById("NFZ").value;				
	
					var fz = vf/ (z * n);
						
					fz = Number(fz.toFixed(3));//muestra 3 decimales (Math.pow(h, mc))
					FZ1.innerHTML = "f<sub>z</sub>: " + fz +" mm";
				}
				FZ12.innerHTML= "f<sub>z</sub>: " + fz +" mm";
				FZTabla.innerHTML= fz +" mm";
				VFTabla.innerHTML= valor +" mm/min";
				ZTabla.innerHTML= valor1 +" dientes";
				RPMTabla.innerHTML= valor2 +" min<sup>-1</sup>";
				
}

function CalcularFresQ()
{
	valor = document.getElementById("AEQ").value;
	valor1 = document.getElementById("APQ").value;
	valor2 = document.getElementById("VFQ").value;


		if( valor == "" || valor1== "" || valor2== "") {
  			alert('Completar todos los campos');
			}else
   				{
					var ae  = document.getElementById("AEQ").value;
					var ap = document.getElementById("APQ").value;	
					var vf = document.getElementById("VFQ").value;				
	
					var q = (ae * ap * vf)/100;
						
					q = Number(q.toFixed(3));//muestra 3 decimales (Math.pow(h, mc))
					Q1.innerHTML = "Q: " + q +" cm<sup>3</sup>/min";
				}
				Q12.innerHTML= "Q: " + q +" cm<sup>3</sup>/min";
				QTabla.innerHTML= q +" cm<sup>3</sup>/min";
				AETabla.innerHTML= valor + " mm";
				APTabla.innerHTML= valor1+ " mm";
				VFTabla.innerHTML= valor2+ " mm/min";
}


function CalcularFresFI()
{
	valor = document.getElementById("AEFI").value;
	valor1 = document.getElementById("DCFI").value;


		if( valor == "" || valor1== "") {
  			alert('Completar todos los campos');
			}else
   				{
					var ae  = document.getElementById("AEFI").value;
					var dc = document.getElementById("DCFI").value;					
	
					var fi = ae / dc;
						fi = Math.asin(fi);//arco seno
						fi = fi * (180/Math.PI);// devuelve el valor en grados
						fi = 2 * fi;
					
					fi = Number(fi.toFixed(3));//muestra 3 decimales
					FI1.innerHTML = "&phi;<sub>s</sub>: " + fi +"°";
				}
				FI12.innerHTML= "&phi;<sub>s</sub>: " + fi +"°";
				FICTabla.innerHTML= fi +"°";
				AETabla.innerHTML= valor + " mm";
				DCTabla.innerHTML= valor1 + " mm";
}

function CalcularFresFINOCEN()
{
	valor = document.getElementById("AEFINC").value;
	valor1 = document.getElementById("DCFINC").value;


		if( valor == "" || valor1== "") {
  			alert('Completar todos los campos');
			}else
   				{
					var ae  = document.getElementById("AEFINC").value;
					var dc = document.getElementById("DCFINC").value;					
	
					var fi = ae -  (dc / 2);
						fi = fi / (dc / 2);
						fi = Math.asin(fi);
						fi = fi * (180/Math.PI);
						fi = 90 + fi;
					
					fi = Number(fi.toFixed(3));//muestra 3 decimales
					FINC1.innerHTML = "&phi;<sub>s</sub>: " + fi +"°";
				}
				FINC12.innerHTML= "&phi;<sub>s</sub>: " + fi +"°";
				FINCTabla.innerHTML= fi +"°";
				AETabla.innerHTML= valor + " mm";
				DCTabla.innerHTML= valor1 + " mm";
}


function CalcularFresHM()
{
	valor = document.getElementById("FZHM").value;
	valor1 = document.getElementById("AEHM").value;
	valor2 = document.getElementById("DCHM").value;


		if( valor == "" || valor1== "" || valor2== "") {
  			alert('Completar todos los campos');
			}else
   				{
					var fz  = document.getElementById("FZHM").value;
					var ae = document.getElementById("AEHM").value;	
					var dc = document.getElementById("DCHM").value;				
	
					var hm = ae / dc;
						hm = Math.sqrt(hm);
						hm = fz * hm;
						
					hm = Number(hm.toFixed(3));//muestra 3 decimales (Math.pow(h, mc))
					HM1.innerHTML = "h<sub>m</sub>: " + hm +" mm"; // raiz Math.sqrt(x)
				}
				HM12.innerHTML= "h<sub>m</sub>: " + hm +" mm";
				HMTabla.innerHTML= hm + " mm";
				FZTabla.innerHTML= valor + " mm";
				AETabla.innerHTML= valor1 + " mm";
				DCTabla.innerHTML= valor2 + " mm";
}