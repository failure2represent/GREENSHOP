$('.owl-carousel').owlCarousel({ 
    autoplay:true,
    autoplayTimeout: 10500,
    autoplaySpeed: 1300,
    nav: true,
    navSpeed: 1000,
    loop: true,
    responsive:{
                0:{
                    items:1
                },
                1100:{
                    items:4
                }
            }
        });

$( function() {
    $( "#accordion" ).accordion({  active: false, collapsible: true});
    $( "#accordion2" ).accordion({  active: false, collapsible: true});
} );

       