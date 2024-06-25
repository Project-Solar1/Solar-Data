$(document).ready(function(){
    MSIE8 = ($.browser.msie) && ($.browser.version == 8),
	$.fn.ajaxJSSwitch({
		topMargin: 240,//mandatory property for decktop
		bottomMargin: 126,//mandatory property for decktop
		topMarginMobileDevices: 240,//mandatory property for mobile devices
		bottomMarginMobileDevices: 126,//mandatory property for mobile devices
        delaySubMenuHide: 300,
        bodyMinHeight: 900,
		menuInit:function (classMenu, classSubMenu){
		},
		buttonOver:function (item){
		},
		buttonOut:function (item){
		},
		subMenuButtonOver:function (item){
		},
		subMenuButtonOut:function (item){
		},
		subMenuShow:function(subMenu){
        	subMenu.stop(true,true).animate({"opacity":"show"}, 400, "easeOutCubic");
		},
		subMenuHide:function(subMenu){
        	subMenu.stop(true,true).animate({"opacity":"hide"}, 500, "easeOutCubic");
		},
		pageInit:function (pages){
		},
		currPageAnimate:function (page){
            page.css({"left":$(window).width()}).stop(true).delay(300).animate({"left":0}, 1000, "easeOutCubic");
		},
		prevPageAnimate:function (page){
            page.stop(true).animate({"display":"block", "left":-$(window).outerWidth()*2}, 700, "easeInCubic");
		},
		backToSplash:function (){
		},
		pageLoadComplete:function (){
			$('.list2>li>a').attr('rel','appendix')
			.prepend('<span class="sitem_over"><strong></strong></span>')
			.fancybox();
        }
	});
})
$(window).load(function(){
    setTimeout(function (){ $(window).trigger('resize') },600);

    $("#galleryHolder").gallerySplash({
        autoPlayState:'false',
        paginationDisplay:'false',
        autoPlayTime: 12,
        alignIMG: 'center'
    }); 

	$("#webSiteLoader").delay(500).animate({opacity:0}, 600, "easeInCubic", function(){$("#webSiteLoader").remove()});
});