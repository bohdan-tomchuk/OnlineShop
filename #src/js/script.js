// Lang 
$( document ).on( 'click', '.js-lang', function () {
    const $parent = $( this ).closest( '.lang' );
    $parent.toggleClass( 'show' );
  });


//   Burger
var burger = $('.js-burger'),
    navContent = $('.js-mob-menu'),
    activeClass ='is-active';

burger.on('click', function(e){
    if($(this).hasClass(activeClass)) {
        $(this).removeClass(activeClass)
        navContent.removeClass(activeClass)
    } else {
        $(this).addClass(activeClass)
        navContent.addClass(activeClass)
    }
});

// Header Scroll
$(window).on("scroll", function() {
    if($(window).scrollTop() > 100) {
        $(".header").addClass("active");
    } else {
       $(".header").removeClass("active");
    }
});

if ($(window).scrollTop() > 100) {
    $(".header").addClass("active");
}


// MODALS
const openModalButtons = $('[data-modal-target]'),
      closeModalButtons = $('[data-close-button]'),
      overlay = $('#overlay');

openModalButtons.each(function(){
    $(this).on('click', function(){
     const modal = $(this).data('modalTarget')
        openModal(modal)
    })
})

closeModalButtons.each(function(){
    $(this).on('click', function(){
     const modal = $(this).closest('.modal')
        closeModal(modal)
    })
})

overlay.click(function(){
    const modals = $('.modal.active');
    modals.each(function(){
        closeModal(this)
    })
})

function openModal(modal) {
    if(modal == null) {
        return
    }
    $(modal).addClass('active')
    overlay.addClass('active')
}

function closeModal(modal) {
    if(modal == null) {
        return
    }
    $(modal).removeClass('active')
    overlay.removeClass('active')
}

//search expand on focus 

$('.header__search input').on('focus', function(e) {
    $(this).parent().addClass('active')
    $('.header__logo').addClass('disable')
});

$('.header__search input').on('blur', function(e) {
    $(this).parent().removeClass('active')
    $('.header__logo').removeClass('disable')
    
});

$('.search-close').on('click', function(e) {
    $(this).parent().removeClass('active')
    $('.header__logo').removeClass('disable')
});

//cart 

const openCart = $('[data-open-cart]'),
      closeCart = $('[data-close-cart]');

openCart.click(function(e) {
    const cart = $(this).data('openCart');
    $('.cart__body').addClass('active');
    overlay.addClass('active')
})

closeCart.click(function(e) {
    const cart = $(this).closest('#cart');
    $('.cart__body').removeClass('active');
    overlay.removeClass('active')
})

overlay.click(function(e) {
    const cart = $('.cart__body.active');
    $('.cart__body').removeClass('active');
    overlay.removeClass('active')
})