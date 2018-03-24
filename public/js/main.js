


(function(){


		
		var windowHeight,
			hiddenElements;

		function initilaizeAnimation(){




				
				windowHeight = window.innerHeight;
				hiddenElements = document.getElementsByClassName('hidden');

				addEventHandlers();




		}// End of initializeAnimation function


		function addEventHandlers(){


				window.addEventListener('scroll',revealHiddenElements);
				window.addEventListener('resize',initilaizeAnimation);

		}// End of addEventHandlers function

		function revealHiddenElements(){


				

				for(var i = 0; i < hiddenElements.length; i++){

						var distanceFromTop = hiddenElements[i].getBoundingClientRect().top;

						if(distanceFromTop - windowHeight <= 0 ){

							hiddenElements[i].className = hiddenElements[i].className.replace('hidden','showElements');
						}
						


				}

		}// End of revealHiddenElements function


		initilaizeAnimation();


}
)()// End of animate function