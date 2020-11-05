$('.product_category').hover(function() {
        $(this).find('.img_fill_color').attr('fill', 'rgb(255,255,255,0.2)')
    },
    function() {
        $(this).find('.img_fill_color').attr('fill', '#FDDB2B')
    }
)

$('.basket_product_trash svg').hover(function(){
  $(this).find('.trash_color').attr('fill','#F00000')
  },
  function(){
    $(this).find('.trash_color').attr('fill', '#C0C0C0')
  }
)


$('.base').hover(function() {
  $(this).find('.svg_circle').attr('fill', '#fff')
},
function() {
  $(this).find('.svg_circle').attr('fill', '#FDDB2B')
}
)



const counter = (selector, action) => {
  let price = selector.parents('.basket_product').find($('.count_info'));

  switch (action) {
    case 'increment': 
      price.val(parseInt(price.val()) + 1); break;
    case 'decrement': 
      if (price.val() < 1) { price.val(0) } else { price.val(parseInt(price.val()) - 1);} break;  
  }
} 

$('.count_plus').click(function() {
  counter($(this), 'increment')
})

$('.count_minus').click(function() {
  counter($(this), 'decrement')
})




$('.catalog_mune_list ul li').hover(function(){
  $(this).find('svg path').attr('fill', '#FDDB2B')
},
  function() {
    $(this).find('svg path').attr('fill', 'white')
  }
)

$('.catalog_mune_list ul li a').click(function(e){
  e.preventDefault()
})

$('.catalog_mune_list ul li ').click(function(e){
  e.preventDefault()
  $('.catalog_mune_list ul li ').removeClass('active')
  $('.catalog_mune_list ul li ').find('svg path').attr('fill', 'white')
  $(this).addClass('active')
  $(this).find('svg path').attr('fill', '#FDDB2B')
 
})



$('.catalog').click(function(){
  if(!$('.catalog').hasClass('active')){
    $('.catalog').addClass('active')
    $('.catalog_wrapper').fadeIn()
  }else{
    $('.catalog').removeClass('active')
    $('.catalog_wrapper').fadeOut()
  }
})


$('.like').click(function(){
  if (!$(this).hasClass('active')) {
    $(this).addClass('active')
    $(this).find('.icon-heart').css("color","#FDDB2B")
  }else{
    $(this).removeClass('active')
    $(this).find('.icon-heart').css("color","transparent")
 }
})

$('.nav_burger_button').click(function(){
  if(!$('.nav_burger_button').hasClass('active')){
      $('.nav_burger_button').addClass('active');
      $('.nav_burger_content').slideDown();

      
  }else{
    $('.nav_burger_button').removeClass('active');
    $('.nav_burger_content').slideUp();
      
  }
})
$('.nav_burger_body .nav_a').click(function(){
  $('.nav_burger_button').removeClass('active');
  $('.nav_burger_content').slideUp();
})


$('.upArrow').on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '1300');
});






$('.button_manu_facturer_content').click(function(){
  if(!$(this).hasClass('active')){
      $(this).addClass('active');
      $(this).css("background","#FDDB2B");
      $(this).find('span').css("background","#fff");
      $(this).find('.button_facturer_spanOne').css("transform","rotate(-45deg)");
      $(this).find('.button_facturer_spanTwo').css("transform","rotate(45deg)");
      $(this).parents('.manufacturer').find('.manufacturer_content').css("display","block")
    }else{
    $(this).removeClass('active');
    $(this).css("background","#FFF8D5");
    $(this).find('span').css("background","#000");
    $(this).find('.button_facturer_spanOne').css("transform","rotate(45deg)");
    $(this).find('.button_facturer_spanTwo').css("transform","rotate(-45deg)");
    $(this).parents('.manufacturer').find('.manufacturer_content').css("display","none")
  }
})



  

$('.page').click(function(){
  $('.page').removeClass('pageActive');
  $(this).addClass('pageActive');
})

$('.prev_arrow').click(function(){
  $('.prev_arrow').removeClass('active');
  $('.prev_arrow span').css("background-color","#DEE0E1")
  $(this).addClass('active');
  $(this).find('span').css("background-color","#FDDB2B");
    
  
})





$('.button_filter').click(function(){
  if(!$('.button_filter').hasClass('active')){
    $('.button_filter').addClass('active')
    $('.catalog_wrapper_left').css({
      'left':'0',
      'transition':'.3s'
    })
  }else{
    $('.button_filter').removeClass('active')
    $('.catalog_wrapper_left').css({
      'left':'-260px',
      'transition':'.3s'
    })
  }
})






$('.product_item').click(function(){
  $('.product_item').removeClass('product_itemActive');
  
  $(this).addClass('product_itemActive');
  

})








$('.button_inBasket .button').click(function(){
  $('.product_in_basket').fadeIn()
})
$('.go_to_basket, .continue_shopping, .btn_close').click(function(){
  $('.product_in_basket').fadeOut()
})



$('.star_icon').click(function(){
  $(this).addClass('star_iconActive')
    
})

$('.starr_icon').click(function(){
  $(this).addClass('a_active')
    
}
)



$('.thank_you').fadeOut()
$('.total_price_content button').click(function(){
  $('.thank_you').fadeIn()
})
$('.thank_you .buttton_closed').click(function(){
  $('.thank_you').fadeOut()
})





//slider init

$(document).ready(function(){
  $('.sports_goods_slider').slick({
    dots: true,
    autoplay:true,
    autoplaySpeed: 6000,
    
  });



  $('.pop_prod_down_slider').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1040,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          
        }
      },
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          
        }
      },
      {
        breakpoint: 415,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          
        }
      }
    ]
  
  });




  $('.sale_slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    dots:true,
    responsive: [
      {
        breakpoint: 1040,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          
        }
      },
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          
        }
      }
    ]
  });

  $('.product_cart_slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    
  })
});


