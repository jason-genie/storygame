var circle1 = anime({
	targets: [".circle-1"],
	translateY: -24,
	translateX: 52,
	direction: "alternate",
	loop: true,
	elasticity: 400,
	easing: "easeInOutElastic",
	duration: 1600,
	delay: 800
});

var circle2 = anime({
	targets: [".circle-2"],
	translateY: 24,
	direction: "alternate",
	loop: true,
	elasticity: 400,
	easing: "easeInOutElastic",
	duration: 1600,
	delay: 800
});

var circle3 = anime({
	targets: [".circle-3"],
	translateY: -24,
	direction: "alternate",
	loop: true,
	elasticity: 400,
	easing: "easeInOutElastic",
	duration: 1600,
	delay: 800
});

var circle4 = anime({
	targets: [".circle-4"],
	translateY: 24,
	translateX: -52,
	direction: "alternate",
	loop: true,
	elasticity: 400,
	easing: "easeInOutElastic",
	duration: 1600,
	delay: 800
});