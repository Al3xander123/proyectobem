$(document).ready(function(){

let time = 100;

$(".menu").fadeOut(time);
$(".s_televisores,.s_equipos_de_sonido,.s_computadoras").slideUp(time);
$(".div_productos").slideUp(time);
$(".div_televisores").slideDown(100);
$(".principal").slideDown(time);

/*CLICK MENU PRINCIPAL*/
$(".principal").click(function(){
	$(".s_televisores,.s_equipos_de_sonido,.s_computadoras").slideUp(time);
	$(".tag").css("background-color","white");
	$(".televisores,.equipos_de_sonido,.computadoras").slideToggle(time);
});

/*CLICK SUB MENU TELEVISOR*/
$(".televisores").click(function(){
	$(".s_equipos_de_sonido,.s_computadoras").slideUp(time);
	$(".div_equipos_de_sonido,.div_computadoras").slideUp(time);
	$(".tag").css("background-color","white");
		
	$(".s_televisores").slideDown(time);
	$(".div_televisores").slideDown(time);
});

/*CLICK SUB MENU EQUIPOS DE SONIDO*/
$(".equipos_de_sonido").click(function(){
	$(".s_televisores,.s_computadoras").slideUp(time);
	$(".div_televisores,.div_computadoras").slideUp(time);
	$(".tag").css("background-color","white");
	
	$(".s_equipos_de_sonido").slideDown(time);
	$(".div_equipos_de_sonido").slideDown(time);
});
/*CLICK SUB MENU COMPUTADORAS*/
$(".computadoras").click(function(){
	$(".s_televisores,.s_equipos_de_sonido").slideUp(time);
	$(".div_televisores,.div_equipos_de_sonido").slideUp(time);
	$(".tag").css("background-color","white");
	
	$(".s_computadoras").slideDown(time);
	$(".div_computadoras").slideDown(time);
});

/*SELECCIONANDO UNA MARCA DE TV*/
$(".li_tv_aiwa").click(function(){
$(".tag_tv").css("background-color","white");
$(".aiwa").css("background-color","pink");
});

$(".li_tv_toshiba").click(function(){
$(".tag_tv").css("background-color","white");
$(".toshiba").css("background-color","pink");
});

$(".li_tv_samsung").click(function(){
$(".tag_tv").css("background-color","white");
$(".samsung").css("background-color","pink");
});

/*SELECCIONANDO UNA MARCA EQUIPO DE SONIDO*/
$(".li_equipo_aiwa").click(function(){
$(".tag_sonido").css("background-color","white");
$(".aiwa").css("background-color","pink");
});

$(".li_equipo_sony").click(function(){
$(".tag_sonido").css("background-color","white");
$(".sony").css("background-color","pink");
});

$(".li_equipo_pionner").click(function(){
$(".tag_sonido").css("background-color","white");
$(".pionner").css("background-color","pink");
});

/*SELECCIONANDO UNA MARCA DE COMPUTADORA*/
$(".li_computadora_gbaja").click(function(){
$(".tag_cpu").css("background-color","white");
$(".baja").css("background-color","pink");
});

$(".li_computadora_gmedia").click(function(){
$(".tag_cpu").css("background-color","white");
$(".media").css("background-color","pink");
});

$(".li_computadora_galta").click(function(){
$(".tag_cpu").css("background-color","white");
$(".alta").css("background-color","pink");
});

//Cierre de document.ready
});
