jQuery(document).ready(function($){
	let Game={};
	Game.Launch=function(){
		let cookies = 0;
		let gps = 0;
		let total = 0;
		let time = 0;
		let freezer = 0;
		let stove = 0;
		let cupboard = 0;
		let mixer = 0;
		let blender = 0;
		let microwave = 0;
		let dishwasher = 0;
		let sec = 0;
		let min = 0;
		let hr = 0;

		$.ajax({
		 	url: "json/data.json",
		 	dataType: "json",
		 	success: function(data){
	        	stat(data);
	        	if (localStorage.saved !== undefined || localStorage.saved !== "") {
	        		load();
	        	}
	    	}
	    });

		function stat(status){
			cookies = status.galletas_disponibles;
			gps = status.galletas_por_segundo;
			total = status.todas_las_galletas;
			time = status.tiempo_jugando;
			freezer = status.refrigeradora_lvl;
			stove = status.horno_lvl;
			cupboard = status.alacena_lvl;
			mixer = status.mescladora_lvl;
			blender = status.licuadora_lvl;
			microwave = status.microondas_lvl;
			dishwasher = status.lavaplatos_lvl;
			$("#stock").html(cookies);
			$("#gps").html(gps);
			$("#allcookies").html(total);
			$("#playtime").html(time);
			$("#status-freezer").html(freezer);
			$("#status-stove").html(stove);
			$("#status-cupboard").html(cupboard);
			$("#status-mixer").html(mixer);
			$("#status-blender").html(blender);
			$("#status-microwave").html(microwave);
			$("#status-dishwasher").html(dishwasher);
		}

		function timing(){
			setInterval(function(){ 

				cookies += gps;
				total += gps;
				$("#stock").html(cookies);
				$("#allcookies").html(total);

				sec ++;

				if (sec < 10){
					sec = "0" + sec
				} else if (sec == 60) {
					sec = 0;
					min ++;
				}

				if (min == 60) {
					min = 0;
					hr ++;
				}
				time = hr + ":" + min + ":" + sec;
				document.getElementById("playtime").innerHTML = hr + ":" + min + ":" + sec; 
				// I used vanilla javascript for this statement for performance reasons 
			}, 1000);
		}

		function prod(){
			$("#kitchen-clickzone").click(function(){
				cookies ++;
				total ++;
				$("#stock").html(cookies);
				$("#allcookies").html(total);
			});
		}

		//
		//items upgrade to lvl 2
		function items(){
			//
			//freezer
			//
			function frLv2(){
				$("#upgrade-freezer").click(function(){
					if (freezer == 1) {
						if (cookies > 99) {
							$("#status-freezer").html("2");
							$("#upgrade-freezer").html("");//"Refrigeradora Lv3"
							$("#kitchen-freezer img").attr( "src", "img/freezers/freezer4.gif");
							cookies-=100;
							gps+=2.5;
							freezer = 2;
							$("#gps").html(gps);
						}
					}
				});
			};
			//
			//stove
			//
			function stLv2(){
				$("#upgrade-stove").click(function(){
					if (stove == 1) {
						if (cookies > 79) {
							$("#status-stove").html("2");
							$("#upgrade-stove").html("");//"Horno Lv3"
							$("#kitchen-stove img").attr( "src", "img/stoves/stove4.gif");
							cookies-=80;
							gps+=1.5;
							stove = 2;
							$("#gps").html(gps);
						}
					}
				});
			};	
			//
			//cupboard
			//
			function cuLv2(){
				$("#upgrade-cupboard").click(function(){
					if (cupboard == 1) {
						if (cookies > 29) {
							$("#status-cupboard").html("2");
							$("#upgrade-cupboard").html("");//"Alacena Lv3"
							$("#kitchen-cupboard img").attr( "src", "img/cupboards/cupboard2.gif");
							cookies-=30;
							gps+=0.5;
							cupboard = 2;
							$("#gps").html(gps);
						}
					}
				});
			};
			//
			//dishwasher //pendiente precio
			//    
			function diLv2(){
				$("#upgrade-dishwasher").click(function(){
					if (dishwasher == 1) {
						if (cookies > 1) {
							$("#status-dishwasher").html("2");
							$("#upgrade-dishwasher").html("");//"Lavaplatos Lv3"
							$("#kitchen-dishwasher img").attr( "src", "img/dishwashers/dishwasher2.png");
							cookies-=10;
							gps+=0.5;
							dishwasher = 2;
							$("#gps").html(gps);
						}
					}
				});
			};
			//
			//mixer
			//
			function mixLv2(){
				$("#upgrade-mixer").click(function(){
					if (mixer == 1) {
						if (cookies > 9) {
							$("#status-mixer").html("2");
							$("#upgrade-mixer").html("");//"Mezcladora Lv3"
							$("#kitchen-mixer img").attr( "src", "img/mixers/mixer3.png");
							cookies-=10;
							gps+=0.5;
							mixer = 2;
							$("#gps").html(gps);
						}
					}
				});
			};
			//
			//blender
			//
			function blLv2(){
				$("#upgrade-blender").click(function(){
					if (blender == 1) {
						if (cookies > 399) {
							$("#status-blender").html("2");
							$("#upgrade-blender").html("");//"Licuadora Lv3"
							$("#kitchen-blender img").attr( "src", "img/blenders/blender2.png");
							cookies-=400;
							gps+=15;
							blender = 2;
							$("#gps").html(gps);
						}
					}
				});
			};
			//
			//microwave
			//
			function micLv2(){
				$("#upgrade-microwave").click(function(){
					if (microwave == 1) {
						if (cookies > 599) {
							$("#status-microwave").html("2");
							$("#upgrade-microwave").html("");//"Microondas Lv3"
							$("#kitchen-microwave img").attr( "src", "img/microwaves/microwave2.png");
							cookies-=600;
							gps+=22;
							microwave = 2;
							$("#gps").html(gps);
						}
					}
				});
			};
			//
			//click
			//
			function prodLv2(){
				$("#kitchen-clickzone").click(function(){
					if ((freezer == 2) && (stove == 2) && (cupboard == 2) && (dishwasher == 1) && (mixer == 2) && (blender == 2) && (microwave == 2)){
						cookies += 200;
						total += 200;
							$("#stock").html(cookies);
							$("#allcookies").html(total);
					}  
				});
			}
			//
			//mading appear new articles
			//
			function diLv1(){

			}

			frLv2();
			stLv2();
			cuLv2();
			diLv2();
			mixLv2();
			blLv2();
			micLv2();
			prodLv2();
		}

		//function to save game in local storage
		function save() {
			let saved = {
				"cookies": cookies,
				"gps": gps,
				"total": total,
				"time": time,
				"freezer": freezer,
				"stove": stove,
				"cupboard": cupboard,
				"mixer": mixer,
				"blender": blender,
				"microwave": microwave,
				"dishwasher": dishwasher,
				"sec": sec,
				"min": min,
				"hr": hr
			};
			window.localStorage.saved = JSON.stringify(saved);
		}

		//function to take saved game and load it to page
		function load(){
			let loadable = JSON.parse(localStorage.saved);
			cookies = loadable.cookies;
			gps = loadable.gps;
			total = loadable.total;
			time = loadable.time;
			freezer = loadable.freezer;
			stove = loadable.stove;
			cupboard = loadable.cupboard;
			mixer = loadable.mixer;
			blender = loadable.blender;
			microwave = loadable.microwave;
			dishwasher = loadable.dishwasher;
			sec = loadable.sec;
			min = loadable.min;
			hr = loadable.hr;

			$("#stock").html(loadable.cookies);
			$("#gps").html(loadable.gps);
			$("#allcookies").html(loadable.total);
			$("#playtime").html(loadable.time);
			$("#status-freezer").html(loadable.freezer);
			$("#status-stove").html(loadable.stove);
			$("#status-cupboard").html(loadable.cupboard);
			$("#status-mixer").html(loadable.mixer);
			$("#status-blender").html(loadable.blender);
			$("#status-microwave").html(loadable.microwave);
			$("#status-dishwasher").html(loadable.dishwasher);

			/*$("#upgrade-freezer").html("Refrigeradora Lv" + ufreezer);
			$("#upgrade-stove").html("Horno Lv" + ustove);
			$("#upgrade-cupboard").html("Alacena Lv" + ucupboard);
			$("#upgrade-mixer").html("Mezcladora Lv" + umixer);
			$("#upgrade-blender").html("Licuadora Lv" + ublender);
			$("#upgrade-microwave").html("Microondas Lv" + umicrowave);
			$("#upgrade-dishwasher").html("Lavaplatos Lv" + udishwasher);
			
			$("#kitchen-freezer img").attr( "src", "img/freezers/freezer"+ freezer +".png");
			$("#kitchen-stove img").attr( "src", "img/stoves/stove"+ stove +".png");
			$("#kitchen-cupboard img").attr( "src", "img/cupboards/cupboard"+ cupboard +".png");
			$("#kitchen-mixer img").attr( "src", "img/mixers/mixer"+ mixer +".png");
			$("#kitchen-blender img").attr( "src", "img/blenders/blender"+ blender +".png");
			$("#kitchen-microwave img").attr( "src", "img/microwaves/microwave"+ microwave +".png");
			$("#kitchen-dishwasher img").attr( "src", "img/dishwashers/dishwasher"+ dishwasher +".png");*/
		}

		$("#save").click(function(){
			save();
		});

		setInterval(save, 60000);
		timing();
		prod();
		items();
	}
	
	Game.Launch();
});