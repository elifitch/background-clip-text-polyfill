;(function(){

	Element.prototype.bgClipPolyfill = function(){
		if(!document.body.style.webkitBackgroundClip) {
			var style = window.getComputedStyle(this),
					bg = style.backgroundImage,
					//remove trailing ')
					bgTrimTrailing = bg.match(/url\((?:\s*?"\s*?|\s*?'\s*?)(.+?)(?=\s*?"\s*?|\s*?'\s*?|\s*?\)\s*?)/g)[0],
					bgTrimLeading = bgTrimTrailing.replace(/url(?:\s*?\("\s*?|\s*?\('\s*?|\s*?\(\s*?)/g,'');
			console.log(bgTrimLeading)
			// console.log('foxy')

		}
	}

	var el = document.querySelectorAll('.clip-text');
	el[0].bgClipPolyfill();
})()