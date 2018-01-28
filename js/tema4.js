var d = new Date();
document.getElementById("id_business_version").innerHTML = "Business version = " + d.getFullYear() + "." + (d.getMonth()+1) + "." + d.getDate() + ".12"; 
navigator.geolocation.getCurrentPosition(on_position_success,on_position_failure);


<script language="javascript">
function check(form)
{

if(form.userid.value == "Sandu" && form.pwd.value == "tema4")
{
	return true;
}
else
{
	alert("Error Password or Username")
	return false;
}
}
</script>
