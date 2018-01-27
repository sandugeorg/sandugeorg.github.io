var d = new Date();
document.getElementById("id_business_version").innerHTML = "Business version = " + d.getFullYear() + "." + (d.getMonth()+1) + "." + d.getDate() + ".0"; 
//_______________________________________________###____________________________________________
var constraints={audio: true,video: true};
navigator.mediaDevices.getUserMedia(constraints).then(on_cam).catch(on_error);
var video = document.getElementById("id_video");
var image = document.getElementById("id_img");
image.addEventListener("touchstart",on_touch_start);
image.addEventListener("touchend",on_touch_end);
function on_touch_start(e)
{
	e.preventDefault();
id_video = video.srcObject=stream;

//----------------------------

function on_error(e)
{
	alert("ERROR!: cannot connect to camera!");
}
//----------------------------
