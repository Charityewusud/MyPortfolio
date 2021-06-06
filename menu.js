var toggle = document.getElementById('toggle');

function hamburgerToggle() {

	var hamburger = document.getElementById('hamburger');
	var cross = document.getElementById('cross');
	var nav = document.getElementById('firstdiv');

	if(hamburger.style.display === 'block'){
		hamburger.style.display = 'none';
		cross.style.display = 'block';
		nav.style.display = 'block';

	} else {
		hamburger.style.display = 'block';
		cross.style.display = 'none';
		nav.style.display = 'none';
	}

}

toggle.addEventListener('click', hamburgerToggle, false);