Papa.parse("https://raw.githubusercontent.com/AvikaN/3d-comet-vis/master/data/comets.csv", {
	download: true,
	complete: function(results) {
	//create scene after data loads
		//console.log(results);
		main(results); 
	}
});


function main(results){
	var data = results.data;
	if ( ! Detector.webgl ) Detector.addGetWebGLMessage();
			var container;
			var camera, controls, scene, renderer;
			//var geometries = [];
			var cross;
			init();
			animate();
			function init() {
				camera = new THREE.PerspectiveCamera( 60, window.innerWidth / window.innerHeight, 1, 1000 );
				camera.position.z = 500;
				initTrackBall();
				// world
				scene = new THREE.Scene();
				//use one basic line material 
				var material = new THREE.LineBasicMaterial({
			        color: 0xffffff, 
			        linewidth : 0.5
			    });

			    //need a seperate geometry for each line
			    //don't do thism it's not informative + there's no scaling for comparison 
			    //map the solar system and their orbits 
				var geometry = new THREE.Geometry(); 
				 //need a seperate geometry for each line
				// for(var i = 1; i < data.length; i++){
				// 	var x = data[i][0]; 
				// 	var y = data[i][1]; 
				// 	var z = data[i][2]; 
				// 	if (x === "-" && y === "-" && z === "-"){
				// 		//geometries.push(geometry);
				// 		//console.log(geometry);
				// 		scene.add(new THREE.Line(geometry, material));
				// 		geometry = new THREE.Geometry();
				// 	}
				// 	else{
				// 		geometry.vertices.push(new THREE.Vector3(x * 10, y * 10, z * 2 ));
				// 	}
				// }

				//var line = new THREE.Line(geometry, material);
			   // scene.add(line);
				// renderer
				renderer = new THREE.WebGLRenderer( { antialias: false } );
				renderer.setPixelRatio( window.devicePixelRatio );
				renderer.setSize( window.innerWidth, window.innerHeight );
				container = document.getElementById( 'container' );
				container.appendChild( renderer.domElement );
				//
				window.addEventListener( 'resize', onWindowResize, false );
				//
				render();
			}
			function onWindowResize() {
				camera.aspect = window.innerWidth / window.innerHeight;
				camera.updateProjectionMatrix();
				renderer.setSize( window.innerWidth, window.innerHeight );
				controls.handleResize();
				render();
			}
			function animate() {
				requestAnimationFrame( animate );
				controls.update();
			}
			function render() {
				renderer.render( scene, camera );
			}

			function initTrackBall(){
				controls = new THREE.TrackballControls( camera );
							controls.rotateSpeed = 1.0;
							controls.zoomSpeed = 1.2;
							controls.panSpeed = 0.8;
							controls.noZoom = false;
							controls.noPan = false;
							controls.staticMoving = true;
							controls.dynamicDampingFactor = 0.3;
							controls.keys = [ 65, 83, 68 ];
							controls.addEventListener( 'change', render );
			}
}



