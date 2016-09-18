
/* is also a commment in JAVASCRIPT*/
// is the second way of commemting in JAVASCRIPT. 

function askQuestions() {
	var firstName= prompt('What is your first name?')
	var lastName= prompt('What is your last name')
	var fullName= firstName + '' + lastName;
	console.log(fullName); 

	var age = prompt('How old are you?');
	age = parseInt(age); 

	if (age>=18) {
			console.log('User is an adult'); 
	} else if (age>=13) {
		console.log('User is a tennager')
	}
	else {
			console.log('User is a child');
	}

	var faveColour= prompt('What is your favourite colour?');
	faveColour= faveColour.toLowerCase(); 

	if (faveColour=='red' ||
		faveColour=='green'||
		faveColour=='blue'||
		faveColour=='yellow') {
		$('h1').css('color', faveColour);
	}


	if (firstName.toLowerCase() == 'general' && lastName.toLowerCase()!='assembly') 
		{console.log ('Hello, General')}

}
	//When the page has loaded 
	$(function(){

		//When the user clicks the images, run askQuestions
		$('img').on('click', askQuestions); 

		// When the user clicks an h3 elemnt

		$('h3').on('click', function() {

			// Slide Toggle the next section, the number between brackets is the time it's going to take to sldie up. If not specified, leave the bracket empty
			$(this).next().slideToggle(500);

	});

	})
