$(document).ready(function(){
$(".sendbutton").mouseenter(function(event){event.preventDefault();$(this).animate({width:'90%',backgroundColor:"#729FCF"},'fast');});
$(".sendbutton").mouseleave(function(event){event.preventDefault();$(this).animate({width:"60%",backgroundColor:"#204A87"},'fast');});
;}); 
