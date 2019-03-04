function mudaFoto(id)
{
	document.getElementById("nota").src="images/teclas/"+id+".png";
}
function tocaNotaMp3(id)
{
	document.getElementById("mp3").src="audio/teclas/"+id+".mp3";
	mp3.play();
}
function tocaNotaAac(id)
{
	document.getElementById("aac").src="audio/teclas/"+id+".aac";
	aac.play();
}
function tocaNotaOgg(id)
{
	document.getElementById("ogg").src="audio/teclas/"+id+".ogg";
	ogg.play();
}