(function( $ ){

  $.fn.jElementExpander = function( options ) {  

    var settings = $.extend( {
      elementToBreatAt : 'H2',
      hiddenLabel: 'Read more...',
      showLabel: 'Read less...'
    }, options);

    return this.each(function() {        

    	var breakElementBeen = false;
    	var hiddenElements = $('<div class="hidden-elements"></div>');

		$(this).children().each(function(i, item) {  

			if (item.tagName == settings.elementToBreatAt){
				breakElementBeen = true;

				hiddenElements.append(item);
			}else{
				if (breakElementBeen){
					hiddenElements.append(item);
				}
			}
		});

		hiddenElements.hide();
		$(this).append(hiddenElements);
		$(this).append(buildReadMore(hiddenElements));
    });

    function buildReadMore(hidden){
    	var readmore = $('<a href="javascript:void(0)">' + settings.hiddenLabel + '</a>');

    	readmore.click(function(){
    		if ($(this).text() == settings.hiddenLabel){
    			$(this).text(settings.showLabel);
    		}else{
    			$(this).text(settings.hiddenLabel);
    		}

    		hidden.toggle();
    	});

    	return readmore;
    }

  };
})( jQuery );