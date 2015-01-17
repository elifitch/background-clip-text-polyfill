;(function(){

	Element.prototype.bgClipPolyfill = function(){
		if(!document.body.style.webkitBackgroundClip) {
			
			console.log('foxy')

		}
	}
	function bgClipTest(){

	}

	var el = document.querySelectorAll('.clip-text');
	console.log(el)
	el[0].bgClipPolyfill();
})()