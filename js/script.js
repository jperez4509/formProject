function Movie(title, runningTimeInMinutes, year, genre, desc) {
	this.movieTitle = title;
	this.movieTime = runningTimeInMinutes;
	this.movieYear = year;
	this.genre = genre;
	this.desc = desc;
}

Movie.prototype = {
	runningTimeHours: function runningTimeHours() {
		var remainingMin = this.movieTime % 60;
		var hrs = Math.floor(this.movieTime /60);
		return hrs + "hr " +remainingMin + "min";
	},

	preview: function preview(){
		var preDesc = this.desc.slice(0, 50);
		return preDesc + "...";
	}

};


var submit = document.getElementById("submit");

submit.addEventListener("click", function (evt) {
	var title = document.getElementById("movieTitle").value;
	var time = document.getElementById("runningTime").value;
	var year = document.getElementById("yearReleased").value;
	var genreInput = document.getElementsByName("optionsRadios");

	for (var i = 0; i < genreInput.length; i++) {
		var genre = genreInput[i];
		if (genre.checked) {
			genreInput = genre.value;
		}
	}

	var description = document.getElementById("description").value;

	var inputMovie = new Movie(title, time, year, genreInput, description);

	var li = e('li', inputMovie.movieTitle + " / " + inputMovie.runningTimeHours() , {class:"movieDesc", rel:inputMovie.preview() });
	var ol = document.getElementById("list");
	ol.appendChild(li);


	li.addEventListener("click", function () {
		alert(this.getAttribute("rel"));

		evt.preventDefault();
	});

	evt.preventDefault();
});


function e(elementType, text, attributes, styles) {
	var element = document.createElement(elementType);
	element.textContent = text || "";

	for (var attr in attributes) {
		if(attributes.hasOwnProperty(attr)) {
			element.setAttribute(attr, attributes[attr]);
		}
	}

	for(var style in styles) {
		if (styles.hasOwnProperty(style)) {
			element.style[style] = styles[style];
		}
	}

	return element;
}

