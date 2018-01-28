var d = new Date();
document.getElementById("id_business_version").innerHTML = "Business version = " + d.getFullYear() + "." + (d.getMonth()+1) + "." + d.getDate() + ".3"; 
//_______________________________________________###____________________________________________
var battery = navigator.battery || navigator.webkitBattery || navigator.mozBattery;

function logBattery(battery) {
    console.log(battery.level);
    console.log(battery.charging);
    console.log(dischargingTime);

    battery.addEventListener('chargingchange', function() {
        console.log('Battery chargingchange event: ' + battery.charging);
    }, false);
}

if (navigator.getBattery) {
    navigator.getBattery().then(logBattery);
} else if (battery) {
    logBattery(battery);
}
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