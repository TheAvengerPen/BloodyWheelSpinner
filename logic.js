function spinWheel(){
    var x = 1024;
    var b = 9999;
    var dgree = Math.floor(Math.random()*(x-b))+b;
    document.getElementById('sa').style.transform="rotate("+dgree+"deg)";
}