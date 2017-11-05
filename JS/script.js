$(function(){



//1. DEFAULT: NO BLOG PAGES SHOWN IN THE FRAME 

// first iteration
		// var race = $(this).data('race');

		// $('#main-content section').each(function() {
		// 	var content = $(this).attr('id');
		// 	console.log(content);

		// 	if (content === race) {
		// 		$(this).addClass('active');
		// 	} else {
		// 		$(this).removeClass('active');
		// 	}
//optimized

	$('.list-of-races').on('click','a', function(e)	{
		e.preventDefault();
	$('#main-content section').removeClass('active');
	$('#' + $(this).data('race')).addClass('active');

});

$(document).ready(function() {
	$("th").css("background-color", "hsla(" + Math.floor(Math.random() * (360)) + ", 75%, 58%, 1)");
});

//2. USER CLICKS LEFT NAV, and BLOG PAGE SLIDES OUT


//sample:

//FALL BACK ON CODE BELOW IF IT DOESNT WORK

// function showMalibu(){
// 	$("#malibuHalf").fadeToggle();
// 	}
// 	$(".Malibu-2013").click(showMalibu);

// function showLA2014(){
// 	$("#laMar-01").fadeToggle();
// 	}
// 	$(".LAMar-2014").click(showLA2014);

// function showHHalf01(){
// 	$("#hollyHf-01").fadeToggle();
// 	}
// 	$(".HollyH-2014").click(showHHalf01);

// function santaB01(){
// 	$("#sBar-01").fadeToggle();
// 	}
// 	$(".SBar-2014").click(santaB01);


// function showBetter01(){
// 	$("#bWorld-01").fadeToggle();
// 	}
// 	$(".BWorld-2015").click(showBetter01);

// function showLA2015(){
// 	$("#laMar-02").fadeToggle();
// 	}
// 	$(".LAMar-2015").click(showLA2015);

// function showOC01(){
// 	$("#oC-01").fadeToggle();
// 	}
// 	$(".OCHa-2015").click(showOC01);

// function showSF01(){
// 	$("#sFran-01").fadeToggle();
// 	}
// 	$(".SFMar-2015").click(showSF01);

// function showLB01(){
// 	$("#lbeach-01").fadeToggle();
// 	}
// 	$(".LBMar-2015").click(showLB01);

// function showSac01(){
// 	$("#sac-01").fadeToggle();
// 	}
// 	$(".CIM-2015").click(showSac01);

// function showSurfCity01(){
// 	$("#surfCity-01").fadeToggle();
// 	}
// 	$(".HBSurfCi-2016").click(showSurfCity01);

// function showHollywood02(){
// 	$("#hollyHf-02").fadeToggle();
// 	}
// 	$(".HollyH-2016").click(showHollywood02);

// function showPasadena01(){
// 	$("#Passa-01").fadeToggle();
// 	}
// 	$(".PasHalf-2017").click(showPasadena01);

// function showLAMarathon03(){
// 	$("#laMar-03").fadeToggle();
// 	}
// 	$(".LAMar-2017").click(showLAMarathon03);

// function showSF02(){
// 	$("#sFran-02").fadeToggle();
// 	}
// 	$(".SFHaMar-2017").click(showSF02);

//pseudo code for an animation sequence



	});



