var d = new Date();
document.getElementById("id_business_version").innerHTML = "Business version = " + d.getFullYear() + "." + (d.getMonth()+1) + "." + d.getDate() + ".3"; 
//_______________________________________________###____________________________________________
navigator.getBattery().then(on_battery).catch(on_battery_error);
function on_battery(b)
{
document.getElementById("id_battery").innerHTML = b.level + " " + b.charging;	
	1
}
function on_battery_error()
{
	
	alert("cannot read battery!");
}
var constraints={
  audio: true,
  video: true
};

var video = document.getElementById("id_video");

window.startVideo = function () {
  navigator.mediaDevices.getUserMedia(constraints).then(on_cam).catch(on_error);
}

window.stopVideo = function () {
  if (window.STREAM) {
    console.log(window.STREAM);
    var tracks = window.STREAM.getTracks();
    tracks.forEach(function(track){
      console.log(track);
      track.stop();
    });
  }
}
//^^^^^^^^^^^^^^^^
function on_cam(stream)
{
    window.STREAM = stream;
	video.srcObject=stream;
}
//^^^^^^^^^^^^^^^^6
function on_error(e)
{
	console.log(e);
  alert("ERROR!: cannot connect to camera!");
}
//^^^^^^^^^^^^^^^^6
function on_touch_video(e)
{
	var canvas = document.getElementById("id_img");
	var context = canvas.getContext("2d");
	context.drawImage(video,0,0);

}