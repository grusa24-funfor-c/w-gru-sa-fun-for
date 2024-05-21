$(document).ready(function(){
$("#cls").click(function(event){event.preventDefault();$("#popup").fadeOut(500)});

$("#b-csr").click(function(event){event.preventDefault();$("#csr").fadeIn(400);$("#epi, #han").fadeOut(400)});
$("#b-epi").click(function(event){event.preventDefault();$("#epi").fadeIn(400);;$("#csr, #han").fadeOut(400)});
$("#b-han").click(function(event){event.preventDefault();$("#han").fadeIn(400);;$("#csr, #epi").fadeOut(400)});
;}); 
