//blog
//past-races page
$( document ).ready(function(){


//1. DEFAULT: NO BLOG PAGES SHOWN IN THE FRAME
//2. USER CLICKS LEFT NAV, and BLOG PAGE SLIDES OUT
function showMalibu(){
	$("#malibuHalf").fadeToggle();
	}
	$("#Malibu-2013").click(showMalibu);

function showLA2014(){
	$("#laMar-01").fadeToggle();
	}
	$("#LAMar-2014").click(showLA2014);

//3. USER CLICKS ANOTHER LINK ON THE LEFT NAV, and CORRESPONDING BLOG PAGES
//COMES OUT.  

//attemptinng an array
// var races = ["#HollyH-2014","#SBar-2014","#BWorld-2015","#LAMar-2015","#OCHa-2015"];

// 	for (var i=0; i<races.length; i++){
// 		$('.list-of-races').val(races[i]).html(races[i]).appendTo('<article/>');
// 		console.log($('.list-of-races').val(races[i]));
// 	}

//function showLA01
//function showHollywood01
//function showSantaB01
//function showBWhalf01
//function showLA02
//function showOCHalf01
//function showSFFull01
//function showSMClassic2015
//function showLBFull01
//function showCIM01
//function showSurfCity01
//function showHollywood02
//function showSMClassic2016
//function showPasadena01


});