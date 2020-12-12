$(document).ready(function(){
        $('.add-btn').click( function() {
            var counter = $('.textbox').val();
            counter++ ;
            $('.textbox').val(counter);
    });
        $('.minus-btn').click( function() {
            var counter = $('.textbox').val();
            counter-- ;
            $('.textbox').val(counter);
    });
});
