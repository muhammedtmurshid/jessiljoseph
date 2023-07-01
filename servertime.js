function updateServerTime() {
    const serverTime=new Date().toLocaleTimeString();
    document.getElementById("serverTime").textContent=serverTime;

}
updateServerTime();
setInterval(updateServerTime,1000);