$(document).ready(function(){
    setInterval(function() {
        var currentRotation = $('#image').data('rotation') || 0;
        var newRotation = currentRotation + 15;
        $('#image').css('transform', 'rotate(' + newRotation + 'deg)').data('rotation', newRotation);
    }, 2000);
});