Papa.parse("https://raw.githubusercontent.com/AvikaN/3d-comet-vis/master/data/comets.csv", {
	download: true,
	complete: function(results) {
	//create scene after data loads
		console.log(results);
		//main(results); 
	}
});


function main(results){
	var data = results.data;
	if ( ! Detector.webgl ) Detector.addGetWebGLMessage();
			var container;
			var camera, controls, scene, renderer;
			var cross;
			init();
			animate();
			function init() {
				camera = new THREE.PerspectiveCamera( 60, window.innerWidth / window.innerHeight, 1, 1000 );
				camera.position.z = 500;
				initTrackBall();
				// world
				scene = new THREE.Scene();
				var material = new THREE.LineBasicMaterial({
			        color: 0xffffff, 
			        linewidth : 2
			    })
				var geometry = new THREE.Geometry(); 
				for(var i = 1; i < data.length; i++){
					geometry.vertices.push(new THREE.Vector3(data[i][0] * 5 , data[i][1] * 5 , data[i][2] * 2));
				}

				var line = new THREE.Line(geometry, material);
			    scene.add(line);
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



