
$(function(){
	$('.control .btn').on('click', function(){
		var _amount = parseInt($(this).parents(".control").find("input").val());
		if($(this).hasClass("btn-minus")){
			if(_amount-1 < 0){
				_amount=1;
			}
			$(this).parents(".control").find("input").val(_amount-1);
		}else if($(this).hasClass("btn-plus")){
			$(this).parents(".control").find("input").val(_amount+1);
		}
	});
	$('.collapse-panel .btn-more').on('click', function(){
		$(this).parents(".collapse-panel").addClass("open");
	});
	$('.collapse-panel .btn-close').on('click', function(){
		$(this).parents(".collapse-panel").removeClass("open");
	});
	$('.filter .filter-nav').on('click', function(){
		var $style=($(this).attr('data-style'));
		var $id=$('#'+$style);
		$(this).addClass("active");
		$(this).siblings(".filter-nav").removeClass("active");
		if($style == 'all'){
			$('.filter-wrap .filter-item').removeClass("hide");
		}else{
			$('.filter-wrap .filter-item').each(function(){
				var  $item=($(this).attr('data-style'));
				if($item == $style){
					$(this).removeClass("hide");
				}else{
					$(this).addClass("hide");
				}
			});
		}
	});

	$(".home-slider").owlCarousel({
		autoplay:true,
	    autoplayTimeout:3000,
	    autoplayHoverPause:true,
	    items:2,
	    loop:true,
	    nav:true
	});
	$(".full-carousel").owlCarousel({
		autoplay:true,
	    autoplayTimeout:3000,
	    autoplayHoverPause:true,
	    items:1,
	    loop:true,
	    nav:true
	});


	var $menu = $('#menu nav'),
		_width = $menu.width(), 
		_scrollWidth =  $menu.prop('scrollWidth'), 
		_maxScrollWidth = _scrollWidth - _width,
		_least = 0;
	
 
	$('#menu nav').scroll(function(){
		var $this = $(this);

		if(_maxScrollWidth - $this.scrollLeft() > _least+5){
			$('#menu').removeClass("righthide");
		}else{
			$('#menu').addClass("righthide");
		}
		if($this.scrollLeft() > _least){
			$('#menu').addClass("leftshow");
		}else{
			$('#menu').removeClass("leftshow");
		}
	});

	/* 滾動置頂 */
	$('.btn-top').on('click', function(){
		$('html,body').animate({scrollTop: 0}, 500);
	});
	$(window).scroll(function(){
		if($(this).scrollTop()>0){
			$('.btn-top').addClass("show");
		}else{
			$('.btn-top').removeClass("show");
		}

	});


	/* 彈窗 */
	$('.btn-bootbox').on('click', function (e) {
		e.preventDefault();
		var key = $(this).attr('bb-key');
		if (key != "") {
            switch (key) {
                case 'bb-alert':
                    bootbox.alert({
                        message: "This is an alert with a callback!",
                        buttons: {
                            ok: {
                                label: 'OK',
                                className: 'btn-default'
                            }
                        },
                        callback: function () {
                        }
                    });
                break;
                case 'bb-confirms':
                    bootbox.confirm({
                		title: "Destroy planet?",
                        message: "This is a confirm with custom button text and color! Do you like it?",
                        buttons: {
                            confirm: {
                                label: 'Yes',
                                className: 'btn-default'
                            },
                            cancel: {
                                label: 'No',
                                className: 'primary'
                            }
                        },
                        callback: function (result) {
                        	alert(result);
                        }
                    });
                break;
                case 'bb-loading':
                    var timeout = 3000; // 3 seconds
                    var dialog = bootbox.dialog({
                        message: '<p class="text-center loading-img"><img src="images/loading.gif" alt=""></p>',
                        closeButton: false,
                        size: 'small'
                    });

                    setTimeout(function () {
                        dialog.modal('hide');
                    }, timeout);

                break;

            }
        }
    });
});

$(document).ready(function() {
	$(".imgLiquidFill").imgLiquid();
});

$(window).load(function() {
	$(".bg_load").fadeOut("slow");
	$(".load-wrapper").fadeOut("slow");
})