Papa.parse("https://raw.githubusercontent.com/AvikaN/3d-comet-vis/master/data/planets.csv", {
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
				//var material = new THREE.LineDashedMaterial({ color: 0xffffff, dashSize: 0.5, gapSize: 2, linewidth: 2 });
				var material = new THREE.MeshBasicMaterial( {color: 0xffffff} );
				var geometry = new THREE.SphereGeometry(0.5, 18, 6);
				//var geometry = new THREE.Geometry(); 
				 //need a seperate geometry for each line
				for(var i = 1; i < data.length; i++){
					var x = data[i][0]; 
					var y = data[i][1]; 
					var z = data[i][2]; 
					if (x === "-" && y === "-" && z === "-"){
						//create a sphere at x,y,z and add it to the scene
						// var mesh = new THREE.Mesh( geometry, material );
						// mesh.position  =  new THREE.Vector3(x, y, z);
						// scene.add(mesh);
						//geometries.push(geometry);
						//console.log(geometry);
						//geometry.computeLineDistances(); 
						//scene.add(new THREE.Line(geometry, material));
						//geometry = new THREE.Geometry();
					}
					else{
						console.log(0);
						var mesh = new THREE.Mesh( geometry, material );
						mesh.position.x = x * 10 ; 
						mesh.position.y = y * 10; 
						mesh.position.z = z; 
						scene.add(mesh);
					}
				}

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



