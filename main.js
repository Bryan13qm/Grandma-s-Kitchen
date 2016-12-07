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

		$.ajax({
		 	url: "json/data.json",
		 	dataType: "json",
		 	success: function(data){
	        	stat(data);
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
			var sec = 0;
			var min = 0;
			var hr = 0;
			setInterval(function(){ 
				 // let stock = cookies + gps;
				 // $("#stock").html(stock);

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

		timing();
		prod();
	}
		
	Game.Launch();
});