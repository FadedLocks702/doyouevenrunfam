$( document ).ready(function(){

//instagram profile//



//blog
//past-races page

//1. DEFAULT: NO BLOG PAGES SHOWN IN THE FRAME 
//		NEW DESIGN: all blog pages are shown
//2. USER CLICKS LEFT NAV, and BLOG PAGE SLIDES OUT
//		NEW DESIGN - LEFT NAV SCROLLS TO ANCHOR
function showMalibu(){
	$("#malibuHalf").fadeToggle();
	}
	$(".Malibu-2013").click(showMalibu);

function showLA2014(){
	$("#laMar-01").fadeToggle();
	}
	$(".LAMar-2014").click(showLA2014);

function showHHalf01(){
	$("#hollyHf-01").fadeToggle();
	}
	$(".HollyH-2014").click(showHHalf01);

function santaB01(){
	$("#sBar-01").fadeToggle();
	}
	$(".SBar-2014").click(santaB01);



//QUESTIONS:
//1. Is it possible to put all links under ".list-of-races" 
//into one function?
//2. If so is it also possible for those links' commands to open up
//their own IDs?

//sample:

// function showDetail(){
// 	$('specificSections').fadeToggle();
// 	}
// 	$(".list-of-races").click('specificIDs')

// 1 possible solution
// function raceDetail(){
// 	$("#bWorld-01","#laMar02").fadeToggle();
// 	}
// 	$(".BWorld-2015",".LA-Mar-2015").click(raceDetail);
// console.log(raceDetail);

// function ShowBWorld(){
// 	$('#bWorld-01').fadeToggle();
// }
// function ShowLAMarathon02(){
// 	$('#laMar-02').fadeToggle();
// }



// $(".BWorld-2015").click(ShowBWorld);
// $(".LAMar-2015").click(ShowLAMarathon02);

//FALL BACK ON CODE BELOW IF IT DOESNT WORK
function showBetter01(){
	$("#bWorld-01").fadeToggle();
	}
	$(".BWorld-2015").click(showBetter01);

function showLA2015(){
	$("#laMar-02").fadeToggle();
	}
	$(".LAMar-2015").click(showLA2015);

function showOC01(){
	$("#oC-01").fadeToggle();
	}
	$(".OCHa-2015").click(showOC01);

function showSF01(){
	$("#sFran-01").fadeToggle();
	}
	$(".SFMar-2015").click(showSF01);

function showLB01(){
	$("#lbeach-01").fadeToggle();
	}
	$(".LBMar-2015").click(showLB01);

function showSac01(){
	$("#sac-01").fadeToggle();
	}
	$(".CIM-2015").click(showSac01);

function showSurfCity01(){
	$("#surfCity-01").fadeToggle();
	}
	$(".HBSurfCi-2016").click(showSurfCity01);

function showHollywood02(){
	$("#hollyHf-02").fadeToggle();
	}
	$(".HollyH-2016").click(showHollywood02);

function showPasadena01(){
	$("#Passa-01").fadeToggle();
	}
	$(".PasHalf-2017").click(showPasadena01);

function showLAMarathon03(){
	$("#laMar-03").fadeToggle();
	}
	$(".LAMar-2017").click(showLAMarathon03);

function showSF02(){
	$("#sFran-02").fadeToggle();
	}
	$(".SFHaMar-2017").click(showSF02);

	});

//Click handler


//Show function

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
