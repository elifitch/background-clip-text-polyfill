;(function(){

	Element.prototype.bgClipPolyfill = function(){
		if(!document.body.style.webkitBackgroundClip) {
			var style = window.getComputedStyle(this),
					bg = style.backgroundImage.match(/url\((?:\s*?"\s*?|\s*?'\s*?)(.+?)(?=\s*?"\s*?|\s*?'\s*?|\s*?\)\s*?)/g)[0].replace(/url(?:\s*?\("\s*?|\s*?\('\s*?|\s*?\(\s*?)/g,'');
			
			console.log(bg)

		}
	}

	var el = document.querySelectorAll('.clip-text');
	el[0].bgClipPolyfill();
})()