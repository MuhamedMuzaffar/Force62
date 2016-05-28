function tim(){

  var endtime = 'August 06 2016 04:30:00 ';//time when rio olympics begin as of indian standard time
  var t = Date.parse(endtime) - Date.parse(new Date());
  var sec = Math.floor( (t/1000) % 60 );
  var min = Math.floor( (t/(1000*60)) % 60 );
  var hr = Math.floor( (t/(1000*60*60)) % 24 );
  var days= Math.floor( t/(1000*60*60*24) );

if(t>1){
  document.getElementById("day").innerHTML=days;
  document.getElementById("hour").innerHTML=hr;
  document.getElementById("min").innerHTML=min;
  document.getElementById("sec").innerHTML=sec;
}
else{
  document.getElementById("day").innerHTML=0;
  document.getElementById("hour").innerHTML=0;
  document.getElementById("min").innerHTML=0;
  document.getElementById("sec").innerHTML=0;
  window.alert("OVER");
  return;
}
  setTimeout(tim,1000);
}

  tim();