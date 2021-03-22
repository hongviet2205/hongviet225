function Hello(){
	alert('Bạn Đã Chuyển Đến Trang Tiếp Theo')
};
function Many(){
	alert('Bạn Đã Chuyển Đến Trang Cuối')
}
window.setTimeout("showTime()", 1000);
function getVNTime(){
	var time = new Date();
	var dow = time.getDay();
	if (dow == 0) {
		dow = "Sunday";
	}else if(dow == 1){
		dow = "Monday";
    }else if(dow == 2){
    	dow = "Tuesday";
    }else if(dow == 3){
    	dow = "Wednesday";
    }else if(dow == 4){
    	dow = "Thursday";
    }else if (dow == 5){
    	dow = "Friday";
    }else if (dow == 6){
    	dow = "Saturday";
    }
    var day = time.getDate();
    var month = time.getMonth()+1;
    var year = time.getFullYear();
    var hr = time.getHours();
    var min = time.getMinutes();
    var sec = time.getSeconds();
    day = ((day < 10)? "0": "") + day;
    month = ((month < 10)? "0" : "") + month;
    hr = ((hr < 10)? "0" : "") + hr;
    min = ((min < 10)? "0" : "") + min;
    sec = ((sec < 10)? "0" : "") + sec;
    return dow + " " + day + "/" + month + "/" + year + " " + hr +":" + min + ":" + sec;
}
function showTime(){
	var vnclock = document.getElementById("vnclock");
	if (vnclock != null) {
		vnclock.innerHTML = getVNTime();
        console.log('asasdasd');
		setTimeout("showTime()", 1000)
	}
}