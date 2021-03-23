KioskBoard.Init({
	/*!* Required* Have to define an Array of Objects for the custom keys. Hint: Each object creates a row element (HTML) on the keyboard.* e.g. [{"key":"value"}, {"key":"value"}] => [{"0":"A","1":"B","2":"C"}, {"0":"D","1":"E","2":"F"}]*/
	keysArrayOfObjects: [{"0": "Q","1": "W","2": "E","3": "R","4": "T","5": "Y","6": "U","7": "I","8": "O","9": "P"},{"0": "A","1": "S","2": "D","3": "F","4": "G","5": "H","6": "J","7": "K","8": "L"},{"0": "Z","1": "X","2": "C","3": "V","4": "B","5": "N","6": "M"}],
	/*!* Required only if "keysArrayOfObjects" is "null".* The path of the "kioskboard-keys-${langugage}.json" file must be set to the "keysJsonUrl" option. (XMLHttpRequest to getting the keys from JSON file.)* e.g. '/Content/Plugins/KioskBoard/dist/kioskboard-keys-english.json'*/
	keysJsonUrl: null,
	/** Optional: (Special Characters Object)* Can override default special characters object with the new/custom one.* e.g. {"key":"value", "key":"value", ...} => {"0":"#", "1":"$", "2":"%", "3":"+", "4":"-", "5":"*"}*/
	specialCharactersObject: null,
	// Optional: (Other Options)
	language: 'en', // Language Code (ISO 639-1) for custom keys (for language support) => e.g. "en" || "tr" || "es" || "de" || "fr" etc.
	theme: 'light', // The theme of keyboard => "light" || "dark" || "flat" || "material" || "oldschool"
	capsLockActive: true, // Uppercase or lowercase to start. Uppercase when "true"
	allowRealKeyboard: false, // Allow or prevent real/physical keyboard usage. Prevented when "false"
	cssAnimations: true, // CSS animations for opening or closing the keyboard
	cssAnimationsDuration: 360, // CSS animations duration as millisecond
	cssAnimationsStyle: 'slide', // CSS animations style for opening or closing the keyboard => "slide" || "fade"
	keysAllowSpacebar: true, // Allow or deny Spacebar on the keyboard. The keyboard is denied when "false"
	keysSpacebarText: 'Space', // Text of the space key (spacebar). Without text => " "
	keysFontFamily: 'sans-serif', // Font family of the keyskeysFontSize: '22px', // Font size of the keys
	keysFontWeight: 'normal', // Font weight of the keyskeysIconSize: '25px', // Size of the icon keys// v1.1.0 and the next versions
	allowMobileKeyboard: false, // Allow or prevent mobile keyboard usage. Prevented when "false"// v1.3.0 and the next versions
	autoScroll: true, // Scrolls the document to the top of the input/textarea element. The default value is "true" as before. Prevented when "false"
});
// Run KioskBoard
KioskBoard.Run('.virtual-keyboard'); // Select any input or textarea element(s) to run KioskBoard

AOS.init();

var timer = new easytimer.Timer();
var playerName = '';
var backgroundVideo = document.getElementById("background_video");

$(document).ready(function() {
	var bar = new ProgressBar.Line(container, {
		strokeWidth: 4,
		easing: 'easeInOut',
		duration: 5000,
		color: '#ff0000',
		trailColor: '#eee',
		trailWidth: 1,
		svgStyle: {width: '100%', height: '100%'}
	});
	  
	bar.animate(1.0, function() {
		backgroundVideo.style.display = "block";
		document.getElementById("page_content").style.display = "block";
		backgroundVideo.play();
		location.href = "#page_1";
	});

	setTimeout(function() {
		document.getElementById("container").style.display = "none";
	}, 5000)

	playerName = sessionStorage.getItem("playername");
	
	if (!playerName || !location.hash) {
		location.href = "#page_1";
	}
	else {
		$(".infoContent.playerName").html("Name: " + playerName);
	}
});

function playGame() {
	if ($("#name_input").val() != '') {
		playerName = $("#name_input").val();
		sessionStorage.setItem("playername", playerName);
		$(".infoContent.playerName").html("Name: " + playerName);
		$("#page_1").trigger("click");
		location.href = "#page_2";
		timer.start();
	}
}

function startTimer() {
	timer.reset();
}

function gameComplete() {
	$('.completed_seconds').html(timer.getTotalTimeValues().seconds);
	var audio = new Audio('audio/good.mp3');
	audio.play();
}

function gameFailed() {
	var audio = new Audio('audio/knock_brush.mp3');
	audio.play();
}