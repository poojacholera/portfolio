const Portfolio = function() {
	function makeWords() {
		var words = [
			{
				text: "ReactJS",
				weight: 12.3
			}, {
				text: "css3",
				weight: 8
			}, {
				text: "javascript",
				weight: 14
			}, {
				text: "OilPainting",
				weight: 1
			}, {
				text: "NodeJS",
				weight: 7
			}, {
				text: "ExpressJS",
				weight: 10
			}, {
				text: "Bootstrap",
				weight: 9
			}, {
				text: "Pooja",
				weight: 15
			}, {
				text: "Html5",
				weight: 7
			},{
				text: "MongoDB",
				weight: 9
			},{
				text: "MySQL",
				weight: 8
			},
		];
		return words;
	}

	function makeWordCloud(words) {
		$('.teaching-domains').jQCloud(words, {delay: 120});
	}

	function displayWordCloud() {
		var count = 1;
		$(window).on('scroll', function() {
			var y_scroll_pos = window.pageYOffset;
			var scroll_pos_test = 2700; // set to whatever you want it to be
			var words = makeWords();
			if (y_scroll_pos > scroll_pos_test && count <= 1) {
				makeWordCloud(words);
				count++;
			}
		});
	}

	function designForm() {
		$("#my-modal form").addClass("my-form");
	}

	function typeAnimation() {
		Typed.new("#writing-text", {
			strings: [
				"am a Full-Stack Web Developer.", "love everything about code.",  "am a MERN-Stack Developer."
			],
			// Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
			stringsElement: null,
			// typing speed
			typeSpeed: 1,
			contentType: 'text',
			callback: function() {
				$("#writing-text").css({"color": "#00695f", "font-weight":"bolder",});
			},
			preStringTyped: function() {},
			onStringTyped: function() {}
		});
	}

	return {
		displayWordCloud: displayWordCloud,
		typeAnimation: typeAnimation
	}

}();


Portfolio.displayWordCloud();
Portfolio.typeAnimation();
