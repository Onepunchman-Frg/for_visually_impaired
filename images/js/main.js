'use strict';

$(function() {
    
	var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

    setTimeout(function(){
        $('.header-menu').rowMenu({
            "moreText":"<span>Ещё</span>",
            "moreWidth": 130
        });
    }, 250);

    if (!isMobile) {
        
        $('.header-menu ul').parent().each(function() {
            var o = $(this);
            var s = o.find('>ul');
            var l = o.parents('ul').length;
            var k = false;
            o.hover(
                function() {
                    o.find('>a').addClass('active').removeClass('normal');
                    for (let i = $('.header-menu ul').length; i >= 0; i--) {
                        o.parent().find('>li').not(o).find('ul').eq(i).hide();
                    }
                    k = true;
                    
                    s.show();
                    
                    var fixedMenuWidth = Math.ceil(o.offset().left) + o.find('>ul').outerWidth() + o.outerWidth();
                    
                    if (fixedMenuWidth > $(window).outerWidth()) {
                        o.find('>ul').addClass('right_level');
                    };
                    
                    if ($(document).outerWidth() > $(window).outerWidth()) {
                        o.find('>ul').addClass('right_level');
                    };
                },
                function() {
                    o.find('>a').removeClass('active').addClass('normal');
                    k = false;
                    window.setTimeout(function() {
                        if (!k) {
                            s.hide()
                            o.find('>ul').removeClass('right_level');
                        };
                    }, 500);
                }
            );
        });
    };

    $.fn.accordion = function(options) {
        options = $.extend({
            headerSelector: '>li>a'
        }, options);

        return this.each(function() {
            var $this = $(this),
                header = $this.find(options.headerSelector);

            header.click(function() {
                var $this = $(this),
                    txt = $this.next(),
                    li = $this.parent();
                txt.slideToggle(200);
                li.toggleClass('active');
                return false;
            });
        });
    } /*Аккордеон*/
    
    $(function() {
        $('.faq-block__accordion').accordion();
        $('.faq-block__accordion .faq-block__item:first-child .faq-block__question').trigger('click');
    }); /*Аккордеон*/

    (function( ) {

        var slider = document.querySelector('.main-slider__items');

        if ($('.main-slider__items').length>0) {

            var sliderAutoplay = +slider.getAttribute('data-autoplay');

            var vslider = tns({
                container: slider,
                slideBy: 1,
                mode: 'gallery',
                axis: 'horizontal',
                animateIn: 'fadeIn',
                animateOut: 'fadeOut',
                animateDelay: 0,
                speed: 0,
                mouseDrag: true,
                center: true,
                autoWidth: false,
                loop: false,
                rewind: true,
                preventActionWhenRunning: true,
                nav: true,
                lazyload: true,
                swipeAngle: 50,
                gutter: 0,
                navPosition: 'bottom',
                controlsPosition: "bottom", 
                autoplayButton: false,
                autoplayButtonOutput: false,
                controlsContainer: document.querySelector('.main-slider__arrows'),
                // controlsText: ['<svg class="gr-svg-icon"><use xlink:href="#icon_shop_slider_prev"></use></svg><svg class="gr-svg-icon gr_small_icon"><use xlink:href="#icon_shop_slider_prev_small"></use></svg>', '<svg class="gr-svg-icon"><use xlink:href="#icon_shop_slider_next"></use></svg><svg class="gr-svg-icon gr_small_icon"><use xlink:href="#icon_shop_slider_next_small"></use></svg>'],
                responsive: {
                    320: {
                        autoplay: false,
                        controls: false
                    },
                    1024: {
                        autoplay: sliderAutoplay,
                        controls: true
                    }
                }
            });

            var small_slider = tns({
                container: '.main-slider__images_content',
                loop: false,
                rewind: true,
                gutter: 0,
                center:false,
                mouseDrag: true,
                nav: false,
                lazyload: true,
                controls: false,
                navPosition: 'bottom',
                preventActionWhenRunning: true,
                axis: 'horizontal',
                mode: 'gallery',
                animateIn: 'fadeIn',
                animateOut: 'fadeOut',
                animateDelay: 10,
                speed: 500,
                items: 1
            });
            
            var navIndex = $('.main-slider__items .main-slider__item').index();
                $('.main-slider__images_content .main-slider__img').removeClass('tns-nav-active');
                $('.main-slider__images_content .main-slider__img').eq(navIndex).addClass('tns-nav-active');
            
            vslider.events.on('indexChanged', function(){
                var navIndex = $('.main-slider__items .tns-nav-active').index();
                $('.main-slider__images_content .main-slider__img').removeClass('tns-nav-active');
                $('.main-slider__images_content .main-slider__img').eq(navIndex).addClass('tns-nav-active');
            });

            vslider.events.on('indexChanged', function(){
                small_slider.goTo(vslider.getInfo().index);
            });
            
            let sliderNav = $('.main-slider__body .tns-nav');
            let sliderNavContainer = $('.main-slider__nav');

            sliderNavContainer.append(sliderNav);
				
            setTimeout(function(){
                $('.main-slider__text').matchHeight();
            }, 100);
        };

    })(); /*Слайдер в шапке*/

    const reviewsSliderFunc = () => {
        var slider = document.querySelector('.reviews_slider');
        var sliderAutoplay = +slider.getAttribute('data-autoplay');
        var reviewsSlider;

        var reviewsSlider_1 = {
            loop: false,
            rewind: true,
            container: slider,
            slideBy: 1,
            mode: "carousel",
            axis: "horizontal",
            autoplayHoverPause: true,
            autoplay: sliderAutoplay,
            autoplayButtonOutput: false,
            mouseDrag: true,
            nav: true,
            navPosition: "bottom",
            controlsPosition: "bottom",   
            controlsText: ['<svg class="gr-svg-icon"><use xlink:href="#icon_shop_slider_prev"></use></svg><svg class="gr-svg-icon gr_small_icon"><use xlink:href="#icon_shop_slider_prev_small"></use></svg>', '<svg class="gr-svg-icon"><use xlink:href="#icon_shop_slider_next"></use></svg><svg class="gr-svg-icon gr_small_icon"><use xlink:href="#icon_shop_slider_next_small"></use></svg>'],
            preventActionWhenRunning: true,
            responsive: {
                320: {controls: false,items: 1,gutter: 20},
                768: {controls: false,items: 2,gutter: 20},
                1024: {controls: true,items: 2,gutter: 20},
                1261: {controls: true,items: 2,gutter: 35}
            },
        };

        var reviewsSlider_2 = {
            loop: false,
            rewind: true,
            container: slider,
            slideBy: 1,
            mode: "carousel",
            axis: "horizontal",
            autoplayHoverPause: true,
            autoplay: sliderAutoplay,
            autoplayButtonOutput: false,
            mouseDrag: true,
            nav: true,
            navPosition: "bottom",
            controlsPosition: "bottom",   
            controlsText: ['<svg class="gr-svg-icon"><use xlink:href="#icon_shop_slider_prev"></use></svg><svg class="gr-svg-icon gr_small_icon"><use xlink:href="#icon_shop_slider_prev_small"></use></svg>', '<svg class="gr-svg-icon"><use xlink:href="#icon_shop_slider_next"></use></svg><svg class="gr-svg-icon gr_small_icon"><use xlink:href="#icon_shop_slider_next_small"></use></svg>'],
            preventActionWhenRunning: true,
            responsive: {
                320: {controls: false,items: 1,gutter: 20},
                768: {controls: false,items: 1,gutter: 20},
                1024: {controls: true,items: 2,gutter: 20},
                1261: {controls: true,items: 2,gutter: 35}
            },
        };

        var reviewsSlider_3 = {
            loop: false,
            rewind: true,
            container: slider,
            slideBy: 1,
            mode: "carousel",
            axis: "horizontal",
            autoplayHoverPause: true,
            autoplay: sliderAutoplay,
            autoplayButtonOutput: false,
            mouseDrag: true,
            nav: true,
            navPosition: "bottom",
            controlsPosition: "bottom",   
            controlsText: ['<svg class="gr-svg-icon"><use xlink:href="#icon_shop_slider_prev"></use></svg><svg class="gr-svg-icon gr_small_icon"><use xlink:href="#icon_shop_slider_prev_small"></use></svg>', '<svg class="gr-svg-icon"><use xlink:href="#icon_shop_slider_next"></use></svg><svg class="gr-svg-icon gr_small_icon"><use xlink:href="#icon_shop_slider_next_small"></use></svg>'],
            preventActionWhenRunning: true,
            responsive: {
                320: {controls: false,items: 1,gutter: 20},
                768: {controls: false,items: 1,gutter: 20},
                1024: {controls: true,items: 1,gutter: 20},
                1261: {controls: true,items: 2,gutter: 35}
            },
        };
        
        if ($('body').hasClass('fs_200')) {
            reviewsSlider = tns(reviewsSlider_3);
        } else if ($('body').hasClass('fs_150')) {
            reviewsSlider = tns(reviewsSlider_2);
        } else {
            reviewsSlider = tns(reviewsSlider_1);
        }

        $(".settings-panel__items .fs-setting input:radio").on('change', function() {
            reviewsSlider.destroy();

            let slider = document.querySelector('.reviews_slider');

            if ($('body').hasClass('fs_200')) {
                reviewsSlider = tns({
                    loop: false,
                    rewind: true,
                    container: slider,
                    slideBy: 1,
                    mode: "carousel",
                    axis: "horizontal",
                    autoplayHoverPause: true,
                    autoplay: sliderAutoplay,
                    autoplayButtonOutput: false,
                    mouseDrag: true,
                    nav: true,
                    navPosition: "bottom",
                    controlsPosition: "bottom",   
                    controlsText: ['<svg class="gr-svg-icon"><use xlink:href="#icon_shop_slider_prev"></use></svg><svg class="gr-svg-icon gr_small_icon"><use xlink:href="#icon_shop_slider_prev_small"></use></svg>', '<svg class="gr-svg-icon"><use xlink:href="#icon_shop_slider_next"></use></svg><svg class="gr-svg-icon gr_small_icon"><use xlink:href="#icon_shop_slider_next_small"></use></svg>'],
                    preventActionWhenRunning: true,
                    responsive: {
                        320: {controls: false,items: 1,gutter: 20},
                        768: {controls: false,items: 1,gutter: 20},
                        1024: {controls: true,items: 1,gutter: 20},
                        1261: {controls: true,items: 2,gutter: 35}
                    },
                });
            } else if ($('body').hasClass('fs_150')) {
                reviewsSlider = tns({
                    loop: false,
                    rewind: true,
                    container: slider,
                    slideBy: 1,
                    mode: "carousel",
                    axis: "horizontal",
                    autoplayHoverPause: true,
                    autoplay: sliderAutoplay,
                    autoplayButtonOutput: false,
                    mouseDrag: true,
                    nav: true,
                    navPosition: "bottom",
                    controlsPosition: "bottom",   
                    controlsText: ['<svg class="gr-svg-icon"><use xlink:href="#icon_shop_slider_prev"></use></svg><svg class="gr-svg-icon gr_small_icon"><use xlink:href="#icon_shop_slider_prev_small"></use></svg>', '<svg class="gr-svg-icon"><use xlink:href="#icon_shop_slider_next"></use></svg><svg class="gr-svg-icon gr_small_icon"><use xlink:href="#icon_shop_slider_next_small"></use></svg>'],
                    preventActionWhenRunning: true,
                    responsive: {
                        320: {controls: false,items: 1,gutter: 20},
                        768: {controls: false,items: 1,gutter: 20},
                        1024: {controls: true,items: 2,gutter: 20},
                        1261: {controls: true,items: 2,gutter: 35}
                    },
                });
            } else {
                reviewsSlider = tns({
                    loop: false,
                    rewind: true,
                    container: slider,
                    slideBy: 1,
                    mode: "carousel",
                    axis: "horizontal",
                    autoplayHoverPause: true,
                    autoplay: sliderAutoplay,
                    autoplayButtonOutput: false,
                    mouseDrag: true,
                    nav: true,
                    navPosition: "bottom",
                    controlsPosition: "bottom",   
                    controlsText: ['<svg class="gr-svg-icon"><use xlink:href="#icon_shop_slider_prev"></use></svg><svg class="gr-svg-icon gr_small_icon"><use xlink:href="#icon_shop_slider_prev_small"></use></svg>', '<svg class="gr-svg-icon"><use xlink:href="#icon_shop_slider_next"></use></svg><svg class="gr-svg-icon gr_small_icon"><use xlink:href="#icon_shop_slider_next_small"></use></svg>'],
                    preventActionWhenRunning: true,
                    responsive: {
                        320: {controls: false,items: 1,gutter: 20},
                        768: {controls: false,items: 2,gutter: 20},
                        1024: {controls: true,items: 2,gutter: 20},
                        1261: {controls: true,items: 2,gutter: 35}
                    },
                });
            }

            navAppend();
        });
        
        setTimeout(function(){
            $('.reviews-block__text').matchHeight();

            navAppend();
        }, 100);    

        let navAppend = () => {
            $('.reviews-block__nav-container').empty();
            
            let sliderNav = $('.reviews-block .tns-nav');
            let sliderContols = $('.reviews-block .tns-controls');
            let sliderNavContainer = $('.reviews-block__nav-container');


            sliderNavContainer.append(sliderNav);
            sliderNavContainer.append(sliderContols);
        }
        
    }; /*Отзывы*/
    setTimeout(function(){
        reviewsSliderFunc();
    }, 100);

    (function( ) {		
        var slider = document.querySelector('.articles_slider');
        var sliderAutoplay = +slider.getAttribute('data-autoplay');

        var respSettings = {
            320: {controls: false,items: 1,gutter: 20},
            768: {controls: false,items: 2,gutter: 20},
            1024: {controls: true,items: 2,gutter: 20},
            1261: {controls: true,items: 2,gutter: 35}
        };

        var articlesSlider = tns({
            loop: false,
            rewind: true,
            container: slider,
            slideBy: 1,
            mode: "carousel",
            axis: "horizontal",
            autoplayHoverPause: true,
            autoplay: sliderAutoplay,
            autoplayButtonOutput: false,
            mouseDrag: true,
            nav: true,
            navPosition: "bottom",
            controlsPosition: "bottom",   
            controlsText: ['<svg class="gr-svg-icon"><use xlink:href="#icon_shop_slider_prev"></use></svg><svg class="gr-svg-icon gr_small_icon"><use xlink:href="#icon_shop_slider_prev_small"></use></svg>', '<svg class="gr-svg-icon"><use xlink:href="#icon_shop_slider_next"></use></svg><svg class="gr-svg-icon gr_small_icon"><use xlink:href="#icon_shop_slider_next_small"></use></svg>'],
            preventActionWhenRunning: true,
            responsive: respSettings,
        });
        
        setTimeout(function(){
            $('.articles-block__content').matchHeight();

            let sliderNav = $('.articles-block .tns-nav');
            let sliderContols = $('.articles-block .tns-controls');
            let sliderNavContainer = $('.articles-block__nav-container');

            sliderNavContainer.append(sliderNav);
            sliderNavContainer.append(sliderContols);
        }, 100);
    })(); /*Статьи*/

    (function( ) {		
        var slider = document.querySelector('.gallery_slider');
        var sliderAutoplay = +slider.getAttribute('data-autoplay');
        
        var respSettings = {
            320: {controls: false,items: 1,gutter: 20},
            768: {controls: false,items: 2,gutter: 20},
            1024: {controls: true,items: 2,gutter: 20},
            1261: {controls: true,items: 3,gutter: 40}
        };

        var gallerySlider = tns({
            loop: true,
            rewind: false,
            container: slider,
            slideBy: 1,
            mode: "carousel",
            axis: "horizontal",
            autoplayHoverPause: true,
            autoplay: sliderAutoplay,
            autoplayButtonOutput: false,
            mouseDrag: true,
            nav: true,
            navPosition: "bottom",
            controlsText: ['<svg class="gr-svg-icon"><use xlink:href="#icon_shop_slider_prev"></use></svg><svg class="gr-svg-icon gr_small_icon"><use xlink:href="#icon_shop_slider_prev_small"></use></svg>', '<svg class="gr-svg-icon"><use xlink:href="#icon_shop_slider_next"></use></svg><svg class="gr-svg-icon gr_small_icon"><use xlink:href="#icon_shop_slider_next_small"></use></svg>'],
            preventActionWhenRunning: true,
            center: true,
            controlsPosition: "bottom",
            responsive: respSettings
        });
        
        setTimeout(function(){
            $('.gallery-block__content').matchHeight();

            let sliderNav = $('.gallery-block .tns-nav');
            let sliderContols = $('.gallery-block .tns-controls');
            let sliderNavContainer = $('.gallery-block__nav-container');

            sliderNavContainer.append(sliderNav);
            sliderNavContainer.append(sliderContols);
        }, 100);
    })(); /*Галерея*/

    (function( ) {		
        var slider = document.querySelector('.partners_slider');
        var sliderAutoplay = +slider.getAttribute('data-autoplay');
        
        var respSettings = {
            320: {controls: false,items: 1,gutter: 20},
            768: {controls: false,items: 2,gutter: 20},
            1024: {controls: true,items: 2,gutter: 20},
            1261: {controls: true,items: 4,gutter: 28}
        };

        var partnersSlider = tns({
            loop: false,
            rewind: true,
            container: slider,
            slideBy: 1,
            mode: "carousel",
            axis: "horizontal",
            autoplayHoverPause: true,
            autoplay: sliderAutoplay,
            autoplayButtonOutput: false,
            mouseDrag: true,
            nav: true,
            navPosition: "bottom",
            controlsText: ['<svg class="gr-svg-icon"><use xlink:href="#icon_shop_slider_prev"></use></svg><svg class="gr-svg-icon gr_small_icon"><use xlink:href="#icon_shop_slider_prev_small"></use></svg>', '<svg class="gr-svg-icon"><use xlink:href="#icon_shop_slider_next"></use></svg><svg class="gr-svg-icon gr_small_icon"><use xlink:href="#icon_shop_slider_next_small"></use></svg>'],
            preventActionWhenRunning: true,
            controlsPosition: "bottom",
            responsive: respSettings
        });
        
        setTimeout(function(){
            let sliderNav = $('.partners-block .tns-nav');
            let sliderContols = $('.partners-block .tns-controls');
            let sliderNavContainer = $('.partners-block__nav-container');

            sliderNavContainer.append(sliderNav);
            sliderNavContainer.append(sliderContols);
        }, 100);
    })(); /*Бренды*/


    
    
    /*Панель для слабовидящих*/
    $('.settings-panel__btn').on("click", function (){
        var $this = $(this);
        var $body = $('.settings-panel');

        if ($this.hasClass('active')){
            $this.removeClass('active');
            $body.removeClass('active');
        } else {
            $this.addClass('active');
            $body.addClass('active');
        }
    });

    $(".settings-panel__items input:radio").on('change', function() {
        setTimeout(function(){
            $('.main-slider__text').matchHeight();
            $('.reviews-block__text').matchHeight();
            $('.articles-block__content').matchHeight();
            $('.gallery-block__content').matchHeight();
        }, 200);
        setTimeout(function(){
            window.dispatchEvent(new Event('resize'));
        }, 300);
    });

    let readCookieFontSize = () => {
        var rdCke = readCookie('ui_fs_stng');
        if (rdCke == '200') {
            $('body').removeClass('fs_150').addClass('fs_200');
            document.documentElement.style.setProperty('--font1Ratio', '2');
            document.documentElement.style.setProperty('--font2Ratio', '2');

            document.documentElement.style.setProperty('--gr_wrap_radius', '10px');
            document.documentElement.style.setProperty('--gr_inner_radius', '8px');
            document.documentElement.style.setProperty('--gr_medium_radius', '6px');
            document.documentElement.style.setProperty('--gr_small_radius', '4px');
            document.documentElement.style.setProperty('--gr_btn_radius', '10px');
            document.documentElement.style.setProperty('--gr_icon_btn_radius', '6px');
            document.documentElement.style.setProperty('--gr_form_radius', '10px');
            document.documentElement.style.setProperty('--gr_checkbox_radius', '6px');
        } else if (rdCke == '150') {
            $('body').removeClass('fs_200').addClass('fs_150');
            document.documentElement.style.setProperty('--font1Ratio', '1.5');
            document.documentElement.style.setProperty('--font2Ratio', '1.5');

            document.documentElement.style.setProperty('--gr_wrap_radius', '8px');
            document.documentElement.style.setProperty('--gr_inner_radius', '6px');
            document.documentElement.style.setProperty('--gr_medium_radius', '4px');
            document.documentElement.style.setProperty('--gr_small_radius', '3px');
            document.documentElement.style.setProperty('--gr_btn_radius', '8px');
            document.documentElement.style.setProperty('--gr_icon_btn_radius', '4px');
            document.documentElement.style.setProperty('--gr_form_radius', '8px');
            document.documentElement.style.setProperty('--gr_checkbox_radius', '4px');
        } else {
            $('body').removeClass('fs_200').removeClass('fs_150');
            document.documentElement.style.removeProperty('--font1Ratio');
            document.documentElement.style.removeProperty('--font2Ratio');
            
            document.documentElement.style.removeProperty('--gr_wrap_radius');
            document.documentElement.style.removeProperty('--gr_inner_radius');
            document.documentElement.style.removeProperty('--gr_medium_radius');
            document.documentElement.style.removeProperty('--gr_small_radius');
            document.documentElement.style.removeProperty('--gr_btn_radius');
            document.documentElement.style.removeProperty('--gr_icon_btn_radius');
            document.documentElement.style.removeProperty('--gr_form_radius');
            document.documentElement.style.removeProperty('--gr_checkbox_radius');
        }
    }

    $(".fs-setting input:radio").on('change', function() {
        eraseCookie('ui_fs_stng');
        var $this 			= $(this),
            value 			= $this.val();
        createCookie("ui_fs_stng", value, 30);
        readCookieFontSize();
    });
    $(".fs-setting input:radio").each(function () {
        var $this = $(this);
        var $val = $this.val();
        var rdCke = readCookie('ui_fs_stng');

        if (rdCke == $val) {
            $this.prop({'aria-checked': 'true', 'checked': true});
        };

        readCookieFontSize();
    });
       
    
    let readCookieSiteColor = () => {
        var rdCke = readCookie('ui_color_stng');
        if (rdCke == '5') {
            $('body').removeClass('color_1')
                    .removeClass('color_2')
                    .removeClass('color_3')
                    .removeClass('color_4')
                    .addClass('color_5');
            $("LINK[href*='color_stngs']").remove();
            $('head').append('<link rel="stylesheet" href="images/styles/color_stngs5.css" type="text/css" />');
        } else if (rdCke == '4') {
            $('body').removeClass('color_1')
                    .removeClass('color_2')
                    .removeClass('color_3')
                    .removeClass('color_5')
                    .addClass('color_4');
            $("LINK[href*='color_stngs']").remove();
            $('head').append('<link rel="stylesheet" href="images/styles/color_stngs4.css" type="text/css" />');
        } else if (rdCke == '3') {
            $('body').removeClass('color_1')
                    .removeClass('color_2')
                    .removeClass('color_4')
                    .removeClass('color_5')
                    .addClass('color_3');
            $("LINK[href*='color_stngs']").remove();
            $('head').append('<link rel="stylesheet" href="images/styles/color_stngs3.css" type="text/css" />');
        } else if (rdCke == '2') {
            $('body').removeClass('color_1')
                    .removeClass('color_3')
                    .removeClass('color_4')
                    .removeClass('color_5')
                    .addClass('color_2');
            $("LINK[href*='color_stngs']").remove();
            $('head').append('<link rel="stylesheet" href="images/styles/color_stngs2.css" type="text/css" />');
        } else if (rdCke == '1') {
            $('body').removeClass('color_2')
                    .removeClass('color_3')
                    .removeClass('color_4')
                    .removeClass('color_5')
                    .addClass('color_1');
            $("LINK[href*='color_stngs']").remove();
            $('head').append('<link rel="stylesheet" href="images/styles/color_stngs1.css" type="text/css" />');
        } else {
            $('body').removeClass('color_1')
                    .removeClass('color_2')
                    .removeClass('color_3')
                    .removeClass('color_4')
                    .removeClass('color_5');
            $("LINK[href*='color_stngs']").remove();
            // $('head').append('<link rel="stylesheet" href="images/styles/color.css" type="text/css" />');
        }
    }

    $(".color-setting input:radio").on('change', function() {
        eraseCookie('ui_color_stng');
        var $this 			= $(this),
            value 			= $this.val();
        createCookie("ui_color_stng", value, 30);
        readCookieSiteColor();
    });
    $(".color-setting input:radio").each(function () {
        var $this = $(this);
        var $val = $this.val();
        var rdCke = readCookie('ui_color_stng');

        if (rdCke == $val) {
            $this.prop({'aria-checked': 'true', 'checked': true});
        };

        readCookieSiteColor();
    });
    

    let readCookieLineHeight = () => {
        var rdCke = readCookie('ui_lh_stng');
        if (rdCke == '3') {
            $('body').removeClass('lh_2').addClass('lh_3');
            document.documentElement.style.setProperty('--lineHeightRatio', '2');
        } else if (rdCke == '2') {
            $('body').removeClass('lh_3').addClass('lh_2');
            document.documentElement.style.setProperty('--lineHeightRatio', '1.5');
        } else {
            $('body').removeClass('lh_2').removeClass('lh_3');
            document.documentElement.style.removeProperty('--lineHeightRatio', '2');
            document.documentElement.style.removeProperty('--lineHeightRatio', '1.5');
        }
    }

    $(".lh-setting input:radio").on('change', function() {
        eraseCookie('ui_lh_stng');
        var $this 			= $(this),
            value 			= $this.val();
        createCookie("ui_lh_stng", value, 30);
        readCookieLineHeight();
    });
    $(".lh-setting input:radio").each(function () {
        var $this = $(this);
        var $val = $this.val();
        var rdCke = readCookie('ui_lh_stng');

        if (rdCke == $val) {
            $this.prop({'aria-checked': 'true', 'checked': true});
        };

        readCookieLineHeight();
    });
    

    let readCookieLetterSpacing = () => {
        var rdCke = readCookie('ui_ls_stng');
        if (rdCke == '3') {
            $('body').removeClass('ls_2').addClass('ls_3');
        } else if (rdCke == '2') {
            $('body').removeClass('ls_3').addClass('ls_2');
        } else {
            $('body').removeClass('ls_2').removeClass('ls_3');
        }
    }

    $(".ls-setting input:radio").on('change', function() {
        eraseCookie('ui_ls_stng');
        var $this 			= $(this),
            value 			= $this.val();
        createCookie("ui_ls_stng", value, 30);
        readCookieLetterSpacing();
    });
    $(".ls-setting input:radio").each(function () {
        var $this = $(this);
        var $val = $this.val();
        var rdCke = readCookie('ui_ls_stng');

        if (rdCke == $val) {
            $this.prop({'aria-checked': 'true', 'checked': true});
        };

        readCookieLetterSpacing();
    });


    let readCookieImgSetting = () => {
        var rdCke = readCookie('ui_img_stng');
        if (rdCke == '3') {
            $('body').removeClass('img_setting_2').addClass('img_setting_3');
        } else if (rdCke == '2') {
            $('body').removeClass('img_setting_3').addClass('img_setting_2');
            
            var siteColorCookie = readCookie('ui_color_stng');
            if (siteColorCookie == 0) {
                $("#sc_1").prop("checked", true).trigger("change");
            };
            
        } else {
            $('body').removeClass('img_setting_2').removeClass('img_setting_3');
        }
    }

    $(".img-setting input:radio").on('change', function() {
        eraseCookie('ui_img_stng');
        var $this 			= $(this),
            value 			= $this.val();
        createCookie("ui_img_stng", value, 30);
        readCookieImgSetting();
    });
    $(".img-setting input:radio").each(function () {
        var $this = $(this);
        var $val = $this.val();
        var rdCke = readCookie('ui_img_stng');

        if (rdCke == $val) {
            $this.prop({'aria-checked': 'true', 'checked': true});
        };

        readCookieImgSetting();
    });

    
    let readCookieFontFam = () => {
        var rdCke = readCookie('ui_ffam_stng');
        if (rdCke == '2') {
            $('body').addClass('ffam_setting_2');
            document.documentElement.style.setProperty('--font1', 'var(--font3)');
            document.documentElement.style.setProperty('--font2', 'var(--font3)');
        } else {
            $('body').removeClass('ffam_setting_2');
            document.documentElement.style.removeProperty('--font1', 'var(--font3)');
            document.documentElement.style.removeProperty('--font2', 'var(--font3)');
        }
    }

    $(".ffam-setting input:radio").on('change', function() {
        eraseCookie('ui_ffam_stng');
        var $this 			= $(this),
            value 			= $this.val();
        createCookie("ui_ffam_stng", value, 30);
        readCookieFontFam();
    });
    $(".ffam-setting input:radio").each(function () {
        var $this = $(this);
        var $val = $this.val();
        var rdCke = readCookie('ui_ffam_stng');

        if (rdCke == $val) {
            $this.prop({'aria-checked': 'true', 'checked': true});
        };

        readCookieFontFam();
    });
    /*Панель для слабовидящих*/


    	
    $('.link-top-btn').on('click', function() {
        $('html, body').stop().animate({
            scrollTop: 0
        }, 800);
    });/*Кнопка наверх*/	

});