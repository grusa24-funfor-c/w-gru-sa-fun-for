$(document).ready(function(){
$("#mn-inst").hover(function(event){event.preventDefault();$("#subinst").slideDown("fast"); $("#submedia, #subcont").slideUp("fast");});
$("#mn-mm").hover(function(event){event.preventDefault();$("#submedia").slideDown("fast"); $("#subinst, #subcont").slideUp("fast");});
$("#menu").mouseenter(function(event){event.preventDefault();$(this).animate({backgroundColor: "#333"},"fast");});
$("#menu").mouseleave(function(event){event.preventDefault();$(this).animate({backgroundColor: "#111"},"fast");});
$(".mn-ind").mouseenter(function(event){event.preventDefault();$(this).animate({backgroundColor:"#fff", color: "#208F58"},80);$("#subinst, #submedia").slideUp("fast");});
$(".mn-ind").mouseleave(function(event){event.preventDefault();$(this).animate({backgroundColor:"transparent", color: "#eee"},80);});
$(".mn-ins").mouseenter(function(event){event.preventDefault();$(this).animate({backgroundColor:"#fff", color: "#208F58"},80);});
$(".mn-ins").mouseleave(function(event){event.preventDefault();$(this).animate({backgroundColor:"transparent", color: "#eee"},80);});
$(".mn-media").mouseenter(function(event){event.preventDefault();$(this).animate({backgroundColor:"#fff", color: "#208F58"},80);});
$(".mn-media").mouseleave(function(event){event.preventDefault();$(this).animate({backgroundColor:"transparent", color: "#eee"},80);});
$(".mn-cont").mouseenter(function(event){event.preventDefault();$(this).animate({backgroundColor:"#fff", color: "#208F58"},80);$("#subinst, #submedia").slideUp("fast");});
$(".mn-cont").mouseleave(function(event){event.preventDefault();$(this).animate({backgroundColor:"transparent", color: "#eee"},80);});
$("#mn-actv").mouseleave(function(event){event.preventDefault();$("#subinst, #submedia").slideUp("fast");});

$("#news-first").mouseenter(function(event){event.preventDefault();$(this).animate({backgroundColor:"#00A7B3"},"fast");	$("#news-first h2, #news-first p,  #news-first p em").animate({color:"#fff"},"fast");	});
$("#news-first").mouseleave(function(event){event.preventDefault();$(this).animate({backgroundColor:"transparent"},"fast");	$("#news-first p, #news-first p em").animate({color:"#333"},"fast"); 	$("#news-first h2").animate({color:"#00A7B3"},"fast");	});
$("#fn-sec-1").mouseenter(function(event){event.preventDefault();$(this).animate({backgroundColor: "#00A7B3"},"fast");$("#fn-sec-1 h2, #fn-sec-1 p").animate({color: "#fff"},"fast");		});
$("#fn-sec-1").mouseleave(function(event){event.preventDefault();$(this).animate({backgroundColor: "transparent"},"fast"); $("#fn-sec-1 p").animate({color: "#444"},"fast");	$("#fn-sec-1 h2").animate({color: "#00A7B3"},"fast");	});
$("#fn-sec-2").mouseenter(function(event){event.preventDefault();$(this).animate({backgroundColor: "#00A7B3"},"fast");$("#fn-sec-2 h2, #fn-sec-2 p").animate({color: "#fff"},"fast");		});
$("#fn-sec-2").mouseleave(function(event){event.preventDefault();$(this).animate({backgroundColor: "transparent"},"fast"); $("#fn-sec-2 p").animate({color: "#444"},"fast");	$("#fn-sec-2 h2").animate({color: "#00A7B3"},"fast");	});
$("#fn-sec-3").mouseenter(function(event){event.preventDefault();$(this).animate({backgroundColor: "#00A7B3"},"fast");$("#fn-sec-3 h2, #fn-sec-3 p").animate({color: "#fff"},"fast");		});
$("#fn-sec-3").mouseleave(function(event){event.preventDefault();$(this).animate({backgroundColor: "transparent"},"fast"); $("#fn-sec-3 p").animate({color: "#444"},"fast");	$("#fn-sec-3 h2").animate({color: "#00A7B3"},"fast");	});

$("#phone-menu-act").click(function(event){event.preventDefault();$("#phone-modal").slideDown(500);});
$("#modal-close").click(function(event){event.preventDefault();$("#phone-modal").slideUp(500);});
$("#mod-inst").click(function(event){event.preventDefault();$("#modal-inst-sub").slideDown(500);});
$("#modal-inst-sub-close").click(function(event){event.preventDefault();$("#modal-inst-sub").slideUp(500);});
$("#mod-media").click(function(event){event.preventDefault();$("#modal-media-sub").slideDown(500);});
$("#modal-media-sub-close").click(function(event){event.preventDefault();$("#modal-media-sub").slideUp(500);});

$("#b-csr").click(function(event){event.preventDefault();$("#csr").fadeIn(400);$("#epi, #han").fadeOut(400)});
$("#b-epi").click(function(event){event.preventDefault();$("#epi").fadeIn(400);;$("#csr, #han").fadeOut(400)});
$("#b-han").click(function(event){event.preventDefault();$("#han").fadeIn(400);;$("#csr, #epi").fadeOut(400)});
;}); 
