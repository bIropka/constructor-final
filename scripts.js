$(document).ready(function () {

    /* nav */
    $('nav .fa-bars').click(function() {
        
        $(this).toggleClass('active');
        $(this).siblings('ul').slideToggle(200);

    });

    /* menu */
    $('.menu .title').click(function() {

        $(this).siblings('ul').slideToggle(200);
        $(this).find('i').toggleClass('fa-arrow-down fa-arrow-up');

    });

    $('.menu .sub-title').click(function() {

        if ($(this).hasClass('active')) {
            $(this).siblings('ul').slideUp(200);
            $(this).removeClass('active');
        } else {
            $('.menu .sub-title.active').siblings('ul').slideUp(200);
            $('.menu .sub-title.active').removeClass('active');
            $(this).addClass('active');
            $(this).siblings('ul').slideDown(200);
        }

    });

    /* menu-chbx */
    $('.form-menu-chbx .sub-title').click(function() {

        $(this).next('.fields').slideToggle(200);
        $(this).find('i').toggleClass('fa-chevron-down fa-chevron-up');

    });


    $('.form-menu-chbx .show-more').click(function() {

        $(this).siblings('.unpopular').slideToggle(200);
        $(this).toggleClass('active');

    });

    $('.menu-chbx .title').click(function() {

        $(this).siblings('.form-menu-chbx').addClass('active');

    });

    $('.form-menu-chbx > i').click(function() {

        $(this).parents('.form-menu-chbx').removeClass('active');

    });

    /* megamenu */

    $('.megamenu-wrap .burger').click(function() {
        $(this).toggleClass('active');
        $(this).siblings('.megamenu').slideToggle(400);
    });

    $('.megamenu > li').hover(
        function() {

            if($(window).width() > 1280) {

                var item = $(this);
                setTimeout(function() {
                    if($(item).is(':hover')) {
                        if($(item).offset().top - $(window).scrollTop() > $(window).height()/2) {
                            $(item).find('.sub-categories').addClass('to-top');
                        }
                        $(item).find('.sub-categories').fadeIn(0);
                    }
                }, 500);

            }

        },
        function() {

            if($(window).width() > 1280) {

                $(this).find('.sub-categories').fadeOut(0);
                $(this).find('.sub-categories').removeClass('to-top');

            }

        });

    $('.sub-categories > li').hover(
        function() {

            if($(window).width() > 1280) {

                var item = $(this);
                setTimeout(function() {
                    if($(item).is(':hover')) {
                        if($(item).offset().top - $(window).scrollTop() > $(window).height()/2) {
                            $(item).find('.links').addClass('to-top');
                        }
                        $(item).find('.links').fadeIn(0);
                    }
                }, 500);

            }

        },
        function() {

            if($(window).width() > 1280) {

                $(this).find('.links').fadeOut(0);
                $(this).find('.links').removeClass('to-top');

            }

        });

    $('.megamenu > li > .fa-caret-right').click(function() {

        if($(window).width() < 1281) {

            if($(this).hasClass('active')) {

                $(this).removeClass('active');
                $(this).siblings('.sub-categories').slideUp(200);

            } else {

                $('.megamenu > li > .fa-caret-right.active').removeClass('active');
                $('.megamenu > li > .sub-categories').slideUp(200);

                $(this).addClass('active');
                $(this).siblings('.sub-categories').slideDown(200);

            }

        }

    });

    $('.megamenu .sub-categories li > .fa-caret-right').click(function() {

        if($(window).width() < 1281) {

            if($(this).hasClass('active')) {

                $(this).removeClass('active');
                $(this).siblings('.links').slideUp(200);

            } else {

                $('.megamenu .sub-categories > li .fa-caret-right.active').removeClass('active');
                $('.megamenu .sub-categories > li .links').slideUp(200);

                $(this).addClass('active');
                $(this).siblings('.links').slideDown(200);

            }

        }

    });

});
