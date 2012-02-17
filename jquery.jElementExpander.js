/*!
* jQuery jElementExpander Plugin v1.0.0
*
* Date: Fri Feb 17 20:28:11 2012 GTM
* Requires: jQuery v1.3+
*
* Copyright 2012, Philip Jones (@philjones88)
* Dual licensed under the MIT and GPL licenses (just like jQuery):
* http://www.opensource.org/licenses/mit-license.php
* http://www.gnu.org/licenses/gpl.html
*/
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