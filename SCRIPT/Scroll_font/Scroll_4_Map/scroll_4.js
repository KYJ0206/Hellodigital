
var data = [
	{
		location: "Lima",
		days: "6 days",
		accommodation: "61.92",
		transportation: "191.02",
		food: "71.08",
		experiences: "10.27",
		miscellaneous: "44.42",

		total: "378.71",
		grTotal: "378.71"
	},

	{
		location: "Paracas",
		days: "1 day",
		accommodation: "12.49",
		transportation: "0",
		food: "8.88",
		experiences: "0",
		miscellaneous: "5.00",
		bigT: { name: "Ballestas Island Tour", cost: "15.00" },
		total: "41.37",
		grTotal: "420.08"
	},

	{
		location: "Huacachina",
		days: "1 day",
		accommodation: "12.49",
		transportation: "0",
		food: "14.02",
		experiences: "0",
		miscellaneous: "7.50",
		bigT: { name: "Sand Dunes", cost: "15.00" },
		total: "49.01",
		grTotal: "469.09"
	},
	{
		location: "Nazca",
		days: "1 day (Quick stop)",
		accommodation: "0",
		transportation: "0",
		food: "8.33",
		experiences: "0",
		miscellaneous: "0",
		total: "8.33",
		grTotal: "477.42"
	},
	{
		location: "Arequipa",
		days: "2 days",
		accommodation: "41.65",
		transportation: "1.67",
		food: "45.81",
		experiences: "26.38",
		miscellaneous: "5.83",
		total: "121.34",
		grTotal: "598.76"
	},
	{
		location: "Colca Canyon",
		days: "2 days",
		accommodation: "0",
		transportation: "0",
		food: "23.05",
		experiences: "4.16",
		miscellaneous: "1.67",
		bigT: { name: "Colca Canyon Tour", cost: "29.40" },
		total: "58.28",
		grTotal: "657.04"
	},

	{
		location: "Puno",
		days: "1 day",
		accommodation: "18.05",
		transportation: "29.99",
		food: "8.88",
		experiences: "0",
		miscellaneous: "79.27",
		bigT: { name: "Puno Lake Tour", cost: "10.00" },
		total: "146.19",
		grTotal: "803.23"
	},
	{
		location: "Cusco",
		days: "8 days",
		accommodation: "172.14",
		transportation: "114.39",
		food: "82.86",
		experiences: "27.21",
		miscellaneous: "10.40",
		bigT: {
			name: "Sacred Valley + Alternative Rainbow Mountain Tour",
			cost: "150.00"
		},
		total: "557.00",
		grTotal: "1360.23"
	},
	{
		location: "Inca Trail",
		days: "4 days",
		accommodation: "0",
		transportation: "0",
		food: "12.22",
		experiences: "0",
		miscellaneous: "143.82",
		bigT: { name: "Classic Inca Trail", cost: "712.17" },
		total: "868.21",
		grTotal: "2,228.44"
	},
	{
		location: "TOTAL",
		days: "26 days",
		accommodation: "318.74",
		transportation: "337.07",
		food: "275.13",
		experiences: "68.02",
		miscellaneous: "297.91",
		bigT: { name: "Tours", cost: "931.57" },
		total: "2,228.44",
		grTotal: "2,228.44"
	}
];

function getData(i) {
	$(".info__location").html(data[i].location);
	$(".info__days").html(data[i].days);
	$(".js-acc").html(data[i].accommodation);
	$(".js-trp").html(data[i].transportation);
	$(".js-food").html(data[i].food);
	$(".js-exp").html(data[i].experiences);
	$(".js-misc").html(data[i].miscellaneous);
	$(".js-tot").html(data[i].total);
	$(".js-grtot").html(data[i].grTotal);

	if ($(data[i].bigT).length > 0) {
		if ($(".info__table__tours").length > 0) {
			$(".js-bigt").html(data[i].bigT.cost);
			$(".js-bigtName").html(data[i].bigT.name);
		} else {
			$(
				'<div class="info__table__child info__table__tours"><div class="info__table__title js-bigtName">' +
					data[i].bigT.name +
					'</div><div class="info__table__expense"><span class="dollar">$</span><span class="odometer js-bigt">' +
					data[i].bigT.cost +
					"</span></div></div>"
			).insertBefore(".info__table__total");
		}
	} else {
		$(".info__table__tours").remove();
	}
}

gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin);

let tl = gsap.timeline();
gsap.set(".path", { drawSVG: 0 });
gsap.set(".pin-base, .pin", { opacity: 0 });

$(document).ready(function () {
	getData(0);
});

function animatePin(place) {
	var tl = new TimelineMax();
	tl.to("#" + place + " g", 0.5, { opacity: 1 }, 0);
	tl.to("#" + place + " .pin", 0.2, { y: 0 }, 0);
	return tl;
}

tl
	.add(animatePin("Lima"))
	.from(".line", {
		scrollTrigger: {
			trigger: "body",
			scrub: true,
			start: "top top",
			end: "bottom bottom"
		},
		scaleX: 0,
		transformOrigin: "left center",
		ease: "none"
	})
	.to("#lima-para", {
		scrollTrigger: {
			trigger: "body",
			start: "top 0px",
			scrub: true,
			end: "+=800"
		},
		drawSVG: true
	})
	.to(".helper", {
		scrollTrigger: {
			trigger: "body",
			start: "top 0px",
			scrub: true,
			end: "+=200"
		},
		opacity: 0
	})
	.to("#Paracas g", {
		scrollTrigger: {
			trigger: "body",
			start: "800px",
			scrub: true,
			end: "+=50",
			onEnter: () => getData(1),
			onEnterBack: () => getData(0)
		},
		opacity: 1
	})
	.to("#Paracas .pin", {
		scrollTrigger: {
			trigger: "body",
			start: "800px",
			scrub: true,
			end: "+=50"
		},
		y: 0
	})
	.to("#para-huaca", {
		scrollTrigger: {
			trigger: "body",
			start: "1200px",
			scrub: true,
			end: "+=800"
		},
		drawSVG: true
	})

	.to("#Huacachina g", {
		scrollTrigger: {
			trigger: "body",
			start: "2000px",
			scrub: true,
			end: "+=50",
			onEnter: () => getData(2),
			onEnterBack: () => getData(1)
		},
		opacity: 1
	})
	.to("#Huacachina .pin", {
		scrollTrigger: {
			trigger: "body",
			start: "2000px",
			scrub: true,
			end: "+=50"
		},
		y: 0
	})
	.to("#huaca-nazca", {
		scrollTrigger: {
			trigger: "body",
			start: "2500px",
			scrub: true,
			end: "+=800"
		},
		drawSVG: true
	})
	.to("#Nazca g", {
		scrollTrigger: {
			trigger: "body",
			start: "3200px",
			scrub: true,
			end: "+=50",
			onEnter: () => getData(3),
			onEnterBack: () => getData(2)
		},
		opacity: 1
	})
	.to("#Nazca .pin", {
		scrollTrigger: {
			trigger: "body",
			start: "3200px",
			scrub: true,
			end: "+=50"
		},
		y: 0
	})
	.to("#nazca-areq", {
		scrollTrigger: {
			trigger: "body",
			start: "3800px",
			scrub: true,
			end: "+=700"
		},
		drawSVG: true
	})
	.to("#Arequipa g", {
		scrollTrigger: {
			trigger: "body",
			start: "4400px",
			scrub: true,
			end: "+=50",
			onEnter: () => getData(4),
			onEnterBack: () => getData(3)
		},
		opacity: 1
	})
	.to("#Arequipa .pin", {
		scrollTrigger: {
			trigger: "body",
			start: "4400px",
			scrub: true,
			end: "+=50"
		},
		y: 0
	})
	.to("#areq-colca", {
		scrollTrigger: {
			trigger: "body",
			start: "5000px",
			scrub: true,
			end: "+=800"
		},
		drawSVG: true
	})
	.to("#Colca g", {
		scrollTrigger: {
			trigger: "body",
			start: "5800px",
			scrub: true,
			end: "+=50",
			onEnter: () => getData(5),
			onEnterBack: () => getData(4)
		},
		opacity: 1
	})
	.to("#Colca .pin", {
		scrollTrigger: {
			trigger: "body",
			start: "5800px",
			scrub: true,
			end: "+=50"
		},
		y: 0
	})
	.to("#colca-puno", {
		scrollTrigger: {
			trigger: "body",
			start: "6300px",
			scrub: true,
			end: "+=800"
		},
		drawSVG: true
	})
	.to("#Puno g", {
		scrollTrigger: {
			trigger: "body",
			start: "7100px",
			scrub: true,
			end: "+=50",
			onEnter: () => getData(6),
			onEnterBack: () => getData(5)
		},
		opacity: 1
	})
	.to("#Puno .pin", {
		scrollTrigger: {
			trigger: "body",
			start: "7100px",
			scrub: true,
			end: "+=50"
		},
		y: 0
	})
	.to("#puno-cusco", {
		scrollTrigger: {
			trigger: "body",
			start: "7500px",
			scrub: true,
			end: "+=800"
		},
		drawSVG: true
	})
	.to("#Cusco g", {
		scrollTrigger: {
			trigger: "body",
			start: "8300px",
			scrub: true,
			end: "+=50",
			onEnter: () => getData(7),
			onEnterBack: () => getData(6)
		},
		opacity: 1
	})
	.to("#Cusco .pin", {
		scrollTrigger: {
			trigger: "body",
			start: "8300px",
			scrub: true,
			end: "+=50"
		},
		y: 0
	})
	.to("#cusco-inca", {
		scrollTrigger: {
			trigger: "body",
			start: "8800px",
			scrub: true,
			end: "+=800"
		},
		drawSVG: true
	})
	.to("#Inca g", {
		scrollTrigger: {
			trigger: "body",
			start: "9500px",
			scrub: true,
			end: "+=50",
			onEnter: () => getData(8),
			onEnterBack: () => getData(7)
		},
		opacity: 1
	})
	.to("#Inca .pin", {
		scrollTrigger: {
			trigger: "body",
			start: "9500px",
			scrub: true,
			end: "+=50"
		},
		y: 0
	})
	.to("body", {
		scrollTrigger: {
			trigger: "body",
			start: "10500px",
			scrub: true,
			end: "+=50",
			onEnter: () => getData(9),
			onEnterBack: () => getData(8)
		},
		opacity: 1
	});
