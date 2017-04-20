$(document).ready(function() {
    
    $('.dropdown').toggle();
    
    $('.trigger').click(function() {
        var id = $(this).data('description');
        $("#" + id).slideToggle();
        $("#" + id).siblings().slideUp();
    });
    
});