function copyIP(){
navigator.clipboard.writeText("lightyagami11.falix.pro");
alert("Server IP Copied!");
}

const serverIP = "lightyagami11.falix.pro";

fetch(`https://api.mcsrvstat.us/2/${serverIP}`)
.then(res=>res.json())
.then(data=>{
let status = document.getElementById("server-status");

if(data.online){
status.innerHTML =
"🟢 Online: " +
data.players.online +
"/" +
data.players.max;
}
else{
status.innerHTML="🔴 Offline";
}
});