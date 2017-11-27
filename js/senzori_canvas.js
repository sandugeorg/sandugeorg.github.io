document.getElementById("id_business_version").innerHTML = "Business version = 2017.11.27.2"
window.addEventListener("deviceorientation", on_device_orientation );

//------------------------------

function deseneaza_cerc(unghi1, unghi2)
{
	
	var canvas = document.getElementById("id_canvas");
	var ctx = canvas.getContext("2d");
	ctx.clearRect(0, 0, 400, 400);
	ctx_rect(0, 0, 400, 400);

	ctx.beginPath();
	ctx.arc(200 + unghi1 * 200 / 90, 200 + unghi2 * 200 / 90, 20, 0, 2 * Math.PI);
	ctx.fillStyle = "#FF0000";
	ctx.fill();
	ctx.strokeStyle = "#00FF00"
	ctx.lineWidth = "5"
	ctx.stroke();

	
}

function on_device_orientation(e)

{
	deseneaza_cerc(e.gamma, e.beta);
	

}

//-----------------------------------