$('.interface').on('click', function(){
    // console.log('działa!');
    // console.log(this);
    // console.log($(this).attr('class'));
    // if(6>5){
    //     console.log('prawda');
    // }
    // if($(this).hasClass('orange')){
    //     console.log('prawda');
    // }
    // if($(this).hasClass('orange')){
    //     console.log('pomaranczowy');
    //     $('body').toggleClass('orange');
    // }
    // if($(this).hasClass('green')){
    //     console.log('zielony');
    //     // $('body').css('background-color', 'green');
    //     $('body').css({
    //         'font-size':'30px',
    //         'background-color':'green'
    //     })
    //     $('p').css('font-size', '130px')
    // }
    // if(this.classList.contains('green')){
    //     console.log('zielony');
    // }

    // @@@ zielony @@@

    if ($(this).hasClass('green')){
        console.log('zielony');
        $('body').attr('class', 'green')
    }

    if ($(this).hasClass('orange')){
        console.log('pomaranczowy');
        $('body').attr('class', 'orange')
    }

    // @@@ pomaranczowy @@@

    if  ($(this).hasClass('increase')){
        console.log('prawda w plus');
        $('.text').animate({
            'font-size':'+=2'
        }, 0)
    }
    if  ($(this).hasClass('move')){
        console.log('prawda w strzałkę');
        $('.text').animate({
            'left':'+=5px',
            'letter-spacing': '+=2px'
        }, 00)
    }

})
