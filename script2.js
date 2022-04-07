$(document).ready(function(){

let time = 100;
$(".sub__ul").slideUp(time);
$(".productos").slideUp(time);
$(".productos__televisores").slideDown(time);



/*MENU UL LI*//*CLICK MENU PRINCIPAL*/
$(".principal").click(function(){
	$(".sub__li").slideToggle(time);
	$(".sub__ul").slideUp(time);
});

/*CLICK SUB MENU TELEVISOR*/
$(".li__televisores").click(function(){
	$(".ul__equipos-de-sonido,.ul__computadoras").slideUp(time);
	$(".ul__televisores").slideDown(time);
	
	$(".productos__equipos-de-sonido,.productos__computadoras").slideUp(time);
	$(".productos__televisores").slideDown(time);
});

/*CLICK SUB MENU EQUIPOS DE SONIDO*/
$(".li__equipos-de-sonido").click(function(){
	$(".ul__televisores,.ul__computadoras").slideUp(time);
	$(".ul__equipos-de-sonido").slideDown(time);
	
	$(".productos__televisores,.productos__computadoras").slideUp(time);
	$(".productos__equipos-de-sonido").slideDown(time);
});

/*CLICK SUB MENU COMPUTADORAS*/
$(".li__computadoras").click(function(){
	$(".ul__televisores,.ul__equipos-de-sonido").slideUp(time);
	$(".ul__computadoras").slideDown(time);
	
	$(".productos__televisores,.productos__equipos-de-sonido").slideUp(time);
	$(".productos__computadoras").slideDown(time);
});
/*
productos__televisores
productos__equipos-de-sonido
productos__computadoras
*/
});