	Papa.parse("/../data/comets.csv", {
		complete: function(results) {
			console.log("Finished:", results.data);
		}
	});
	// var container;
	// var camera, scene, renderer;
	// var cube, plane;
	// var targetRotation = 0;
	// var targetRotationOnMouseDown = 0;
	// var mouseX = 0;
	// var mouseXOnMouseDown = 0;
	// var windowHalfX = window.innerWidth / 2;
	// var windowHalfY = window.innerHeight / 2;
	// init();
	// animate();
	// function init() {
	// 	container = document.getElementById( 'container' );
	// 	document.body.appendChild( container );
	// 	camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 1, 1000 );
	// 	camera.position.y = 150;
	// 	camera.position.z = 700;
	// 	scene = new THREE.Scene();
	// 	// Cube
	// 	var geometry = new THREE.BoxGeometry( 200, 200, 200 );
	// 	for ( var i = 0; i < geometry.faces.length; i += 2 ) {
	// 		var hex = Math.random() * 0xffffff;
	// 		geometry.faces[ i ].color.setHex( hex );
	// 		geometry.faces[ i + 1 ].color.setHex( hex );
	// 	}
	// 	var material = new THREE.MeshBasicMaterial( { vertexColors: THREE.FaceColors, overdraw: 0.5 } );
	// 	cube = new THREE.Mesh( geometry, material );
	// 	cube.position.y = 150;
	// 	scene.add( cube );
	// 	// Plane
	// 	var geometry = new THREE.PlaneBufferGeometry( 200, 200 );
	// 	geometry.rotateX( - Math.PI / 2 );
	// 	var material = new THREE.MeshBasicMaterial( { color: 0xe0e0e0, overdraw: 0.5 } );
	// 	plane = new THREE.Mesh( geometry, material );
	// 	scene.add( plane );
	// 	renderer = new THREE.CanvasRenderer();
	// 	renderer.setClearColor( 0xf0f0f0 );
	// 	renderer.setPixelRatio( window.devicePixelRatio );
	// 	renderer.setSize( window.innerWidth, window.innerHeight );
	// 	container.appendChild( renderer.domElement );
	// 	window.addEventListener( 'resize', onWindowResize, false );
	// }

	// function onWindowResize() {
	// 	windowHalfX = window.innerWidth / 2;
	// 	windowHalfY = window.innerHeight / 2;
	// 	camera.aspect = window.innerWidth / window.innerHeight;
	// 	camera.updateProjectionMatrix();
	// 	renderer.setSize( window.innerWidth, window.innerHeight );
	// }

	// function animate() {
	// 	requestAnimationFrame( animate );
	// 	render();
	// }
	// function render() {
	// 	plane.rotation.y = cube.rotation.y += ( targetRotation - cube.rotation.y ) * 0.05;
	// 	renderer.render( scene, camera );
	// }