/********************************* NAV BAR **************************/

//Activates the clicked item on nav bar
$('.nav-item').on('click', function(){

    //Remove active class
    $('.nav-item').removeClass('active');

    $(this).addClass('active');
});

//Changing colors of active and inactive
