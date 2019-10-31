function Tags( element ) {
	
	let arrayOfList 	= ['Article', 'Blog', 'Page', 'Post']
	let DOMParent 		= document.querySelector( element )
	let DOMList
	let DOMInput
	
	function DOMCreate() {
		let ul 		= document.createElement('ul')
		let li 		= document.createElement('li')
		let input 	= document.createElement('input')
		
		DOMParent.appendChild( ul )
		DOMParent.appendChild( input )
		
		DOMList 	= DOMParent.firstElementChild
		DOMInput = DOMParent.lastElementChild
	}
	
	function DOMRender() {
		// clear the entire <li> inside <ul> 
		DOMList.innerHTML = ''
		
		// render each <li> to <ul>
		arrayOfList.forEach( function( currentValue, index ) {
			let li 				= document.createElement('li')
				 li.innerHTML 	= `${currentValue} <a href='#'>&times;</a>`
				 li.querySelector('a').addEventListener( 'click', function() {
					 
					 if( confirm('Continue to remove tag?') ){
						onDelete( index )	 
					 }
					 return false;
				 })
			
			DOMList.appendChild( li )
		})
	}
	
	function onKeyUp() {
		DOMInput.addEventListener( 'keyup', function( event ) {
			let text = this.value.trim()
			
			// check if ',' or 'enter' key was press
			if ( text.includes(',') || event.keyCode == 13 ) {
				// check if empty text when ',' is remove
				if ( text.replace(',', '') != '') {
					// push to array and remove ','
					arrayOfList.push( text.replace(',' , '') )
				}
				// clear input
				this.value = ''
			}
			
			DOMRender()
		})
	}
	
	function onDelete( id ) {
		arrayOfList = arrayOfList.filter(function( currentValue, index ) {
			if (index == id ) {
				return false
			}
			return currentValue
		})
		
		DOMRender()
	}
	
	DOMCreate()
	DOMRender()
	onKeyUp()
}
