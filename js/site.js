// jQuery 3.x-style ready event and locally scoped $
jQuery(function($) {
    $('html').removeClass('nojs');
    $('html').addClass('hasjs');
});

// functions
function checksubmit(){
    alert('Thank you for signing up!');
    
    // disable submit button;
    var submitbutton = document.getElementById("submit");
};

document.getElementById("Test1").addEventListener('submit', checksubmit);
