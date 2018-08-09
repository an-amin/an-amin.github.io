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

        $(document).on('click', '.swiper-slide img', function(){
            var modalTitle = $(this).attr('alt');
            var imgSrc = $(this).attr('src');
            var projectData = $(this).attr('data');
            var html = `<div class="row">
                <div class="col-md-6"><img src="${imgSrc}" alt="${modalTitle}" class="img-fluid" width="100%"/></div>
                <div class="col-md-6">
                    ${modalTitle}<br>
                    <a target="_blank" href="${projectData}">Project Link</a>
                </div>
            </div>`;
            $('#CustomModal .modal-title').text('Project Detail');
            $('#CustomModal .modal-body').html(html);
            $('#CustomModal').modal('show');
        });

        $(document).on('click', '#Resume', function(){
            var data = {};
            data.html = `<iframe src="resources/files/Resume_Aminul_Islam.pdf" width="100%" height="500px" frameborder="0"></iframe>`;
            $('#CustomModal .modal-title').text('My Resume');
            $('#CustomModal .modal-body').html(data.html);
            $('#CustomModal').modal('show');
        });

        var d = new Date();
        $('#copyright_date').text(d.getFullYear());

	}); //document.ready
})( jQuery ); // jQuery.definer