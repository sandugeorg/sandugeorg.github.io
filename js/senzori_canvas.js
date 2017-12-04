document.getElementById("id_business_version").innerHTML = "Business version = 2017.11.28.1";

//window.addEventListener("deviceorientation", on_device_orientation);
window.addEventListener("devicemotion", on_device_motion);

var canvas = document.getElementById("id_canvas");
var ctx = canvas.getContext("2d");

var gamma = 0;
var beta = 0;
setInterval(deseneaza_cerc, 40);//, gamma, beta);


//-----------------------------------------------------
function deseneaza_cerc();//(unghi1, unghi2)
{
		ctx.clearRect(0, 0, 400, 400);
		
		ctx.rect(0, 0, 400, 400);
		ctx.stroke();
		
		ctx.beginPath();
		ctx.arc(200 + gamma * 200 / 90, 200 + beta * 200 / 90, 20, 0, 2 * Math.PI);
		ctx.fillStyle = "#FF0000";
		//ctx.fill();
		ctx.strokeStyle = "#00FF00";
		ctx.lineWidth = 5;
		ctx.stroke();
}
//-----------------------------------------------------
function on_device_orientation(e)
{
	//deseneaza_cerc(e.gamma, e.beta);
	gamma = e.gamma;
	beta = e.beta;
	
}
//-----------------------------------------------------
function on_device_motion(e)
{
	 beta = Math.atan(e.accelerationIncludingGravity.y / e.accelerationIncludingGravity.z) * 180 / Math.PI;
	 gamma = -Math.atan(e.accelerationIncludingGravity.x / e.accelerationIncludingGravity.z) * 180 / Math.PI;
	
	//deseneaza_cerc(gamma, beta);
}