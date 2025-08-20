$(()=>{
    let num = 940;
    $(window).on('wheel', function(e){
        if ($('html,body').is(':animated')) return;

        $('html,body').animate({scrollTop: num});
        if (e.originalEvent.deltaY > 0) {
            num += 940;
        } else {
            num -= 940;
        }
        console.log(e.originalEvent.deltaY, num);

        if(num <= 0) {
            num = 0;
        }
        if(num >= 940*3 + 300) {
            num = 940*3 + 300;
        }
    });
    // let box1 = $('#box').offset().top;
    // let box2 = $('#box').position().top;
    // console.log(box1);
    // console.log(box2);
});