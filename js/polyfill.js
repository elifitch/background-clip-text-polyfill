;(function(){

	Element.prototype.bgClipPolyfill = function(){
		if(!document.body.style.webkitBackgroundClip) {
			var el = this,
					style = window.getComputedStyle(el),
					bg = style.backgroundImage.match(/url\((?:\s*?"\s*?|\s*?'\s*?)(.+?)(?=\s*?"\s*?|\s*?'\s*?|\s*?\)\s*?)/g)[0].replace(/url(?:\s*?\("\s*?|\s*?\('\s*?|\s*?\(\s*?)/g,''),
					fontSize = style.fontSize,
					fontFamily = style.fontFamily,
					fontStyle = style.fontStyle,
					fontWeight = style.fontWeight
					lineHeight = style.lineHeight;

			// this.parent.insertBefore('<div style="background: red; width: 100%; height: 50px;', parent.firstChild);
			canvas = document.createElement('canvas');
			
			var ctx = canvas.getContext("2d");
			//create image we're going to use as a fill pattern
			var img = document.createElement("img");
			img.src = bg;
			//draw the text
			img.onload= function(){
				createCanvas();
			  drawText();
			  console.log('image loaded')
			}
			//function that draws the text and fills it with the texture from the img
			function drawText() {
			  

			  ctx.font = fontStyle+' normal '+fontWeight+' '+fontSize+' '+fontFamily;

			  ctx.fillStyle = ctx.createPattern(img, 'repeat');
			  console.log(ctx.fillStyle)
			  ctx.textAlign = 'center';
			  var x = canvas.width / 2; 
			  ctx.fillText("butthole", x, 400);
			  ctx.fill();
			}
			function createCanvas(){
				el.parentNode.insertBefore(canvas, parent.firstChild);
				el.parentNode.removeChild(el);
			  canvas.width = 1000;
			  canvas.height = 400;
			}

			
		}
	}

	var el = document.querySelectorAll('.clip-text');
	el[0].bgClipPolyfill();
})()