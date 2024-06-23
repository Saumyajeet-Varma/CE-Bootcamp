// ----NAVBAR----//

$(document).ready(function () {
    $('.menu-btn').click(function () {
        $('.navbar .menu').toggleClass('active');
        $('.menu-btn i').toggleClass('active');
        $('.dropdown-content').removeClass('onscreen');
    });
     $('.dropdown').click(function () {
        $('.dropdown-content').toggleClass('onscreen');
    });
});