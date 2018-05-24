/*
 * Author 	: Aminul Islam
 */
 
(function($) {
	$(document).ready(function($) {

	    console.log('script-loaded', 'script.js');

        $('[data-toggle=tooltip]').tooltip();
        
        function eye_left(){
            setTimeout(function(){
                $('.spectacles').text('{o-O}');
                eye_right();
            }, 500);
        }
        function eye_right(){
            setTimeout(function(){
                $('.spectacles').text('{O-o}');
                eye_left();
            }, 500);
        }
        eye_right();

        var myTeamIMG = {};
        myTeamIMG.obj = document.getElementById('myTeamIMG'); 
        myTeamIMG.width = myTeamIMG.obj.clientWidth;
        myTeamIMG.height = myTeamIMG.obj.clientHeight;
        console.log(myTeamIMG);
        
        var d=new Date();
        $('#copyright_date').text(d.getFullYear());

	}); //document.ready
})( jQuery ); // jQuery.definer