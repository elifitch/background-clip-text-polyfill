;(function(){

	Element.prototype.bgClipPolyfill = function(){
		if(!document.body.style.webkitBackgroundClip) {
			var el = this,
					doc = document,
					style = window.getComputedStyle(el),
					bg = style.backgroundImage.match(/url\((?:\s*?"\s*?|\s*?'\s*?)(.+?)(?=\s*?"\s*?|\s*?'\s*?|\s*?\)\s*?)/g)[0].replace(/url(?:\s*?\("\s*?|\s*?\('\s*?|\s*?\(\s*?)/g,'');

			function makeSVG() {
				var svg = doc.createElement('svg'),
						defs = doc.createElement('defs'),
						clipPath = doc.createElement('clippath'),
						text = doc.createElement('text'),
						image = doc.createElement('image');

				clipPath.setAttribute('id', 'clip-path');

				//give el classes to <text>
				text.setAttribute('class', el.getAttribute('class'));

				//image attrs
				image.setAttribute('xlink:href', bg);
				image.setAttribute('width', '100%');
				image.setAttribute('height', '100%');
				image.setAttribute('clip-path', 'url(#clip-path)')
				
				//set up SVG structure
				svg.appendChild(defs).appendChild(clipPath).appendChild(text);
				svg.appendChild(image);

				//insert SVG
				el.parentNode.insertBefore(svg, el);
				//remove el
			}
			makeSVG();
			
// 			<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="1200" height="400" viewBox="0 0 1200 400"> 
//     <!-- add title for accessibility -->
//     <title>Adding Background to Text using SVG clipPath</title> 
//     <defs>  
//       <clippath id="my-path">
//         <text x="50" y="300" font-size="200" >WATERCOLOR</text>
//       </clippath>
//     </defs>
//     <image xlink:href="img/watercolor_1.jpg" clip-path="url(#test)" width="100%" height="100%" preserveAspectRatio="none" />
// </svg>

// image {
//     clip-path: url(#my-path);
// }

		}
	}

	var el = document.querySelectorAll('.clip-text');
	el[0].bgClipPolyfill();
})()