//All ready!. Page &  Cordova loaded.
//Todo listo!. Página & Cordova cargados.
function deviceReady() {

	//Your code here **********
	//Su código aquí **********
	
	//Hide splash
	//Ocultar el splash
	if (navigator.splashscreen) {
		navigator.splashscreen.hide();
	}

	installEvents();
}

function installEvents() {

	$('#crearUsuario').click(function() {
		mui.viewport.showPage('page2','SLIDE_UP');
		return false;
	});

}