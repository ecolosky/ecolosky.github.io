$(document).ready(init());

function init(){
	//hide tabs to sync up home view
	$(".contactPage").hide();
    $(".aboutPage").hide();

    //Navbar stuff
    $(".nav.navbar-nav > li").on('click', function(e) {
       $('.nav.navbar-nav > li').removeClass('active');
       $(this).addClass('active');
        // $("home").toggleClass("contact");
    });

    $("#home").click(function(){
        $(".homePage").show();
        $(".contactPage").hide();
        $(".aboutPage").hide();
				$("body").scrollTop(0);


    });

    $("#about").click(function(){
        $(".homePage").hide();
        $(".contactPage").hide();
        $(".aboutPage").show();
				$("body").scrollTop(0);

    });
		function contactMe(){
        $(".homePage").hide();
        $(".aboutPage").hide();
        $(".contactPage").show();
				$("body").scrollTop(0);
				
    }
		$(document).click(function(){
			$("#navbar").collapse('hide');
		});
		$(".contactLink").click(contactMe);
    $("#contact").click(contactMe);
}
