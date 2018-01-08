
document.getElementById("id_business_version").innerHTML = "Business version = 2018.1.8.5";
navigator.geolocation.getCurrentPosition(on_position_success, on_position_failure);

function on_position_success(e)
{
	document.getElementById("id_lat").innerHTML = "Latitude =" + e.coords.latitude;
	document.getElementById("id_long").innerHTML = "Longitude =" + e.coords.longitude;
	document.getElementById("id_acc").innerHTML = "Accuracy =" + e.coords.accuracy + "m";
	document.getElementById("id_alt").innerHTML = "Altitude =" + e.coords.altitude;
var map_str = "https://maps.googleapis.com/maps/api/staticmap?" + "center="+ e.coords.latitude+ ","
+ e.coords.longitude+
"&zoom=18" +
 "&size=400x300" +
 "&key=AIzaSyACZOC1Gk4ILbhnGdr49HGgODXXxDDz0z0" + "&markers=color:blue|label:Apor"+e.coords.latitude+ ","
+ e.coords.longitude ;
	document.getElementById("id_img").src = map_str;
}
//-----------------------------
function on_position_failure(e)
{
	alert("M-am pierdut");
	
	
	
}
//------------
//AIzaSyACZOC1Gk4ILbhnGdr49HGgODXXxDDz0z0
//&key=AIzaSyDUU2mhTvUfY8EYOmp55I3D5OzfsBTy6vQ